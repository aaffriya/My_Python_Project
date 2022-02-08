#include <iostream>
#include <stdexcept>
#include <stdio.h>
#include <string>
#include <vector>
#include <map>
using namespace std;

string exec(string command);
vector<string> indexs;
map<string, string> keys;

int main()
{
   string list = exec("netsh wlan show profiles");
   int short index = 0, pos = 0;

   while (index != -1)
   {
      index = list.find("All User Profile     : ", pos);
      if (index != -1)
      {
         string str;
         while (list[index + 23] != '\n')
         {
            str += list[index + 23];
            index++;
         }
         pos = index + 23;
         indexs.push_back(str);
      }
   }
   for (auto &&i : indexs)
   {
      string show = exec("netsh wlan show profiles " + i + " key=clear");
      short index = show.find("Key Content            : ");
      if (index == -1)
         keys.insert({i, " -> No key Found!"});
      else
      {
         string str;
         while (show[index + 25] != '\n')
         {
            str += show[index + 25];
            index++;
         }
         keys.insert({i, " -> " + str});
      }
   }

   for (auto &&i : keys)
   {
      cout << i.first << i.second << endl;
   }
   system("pause");

} /*  main end */

string exec(string command)
{
   char buffer[128];
   string result = "";
   // Open pipe to file
   FILE *pipe = popen(command.c_str(), "r");
   if (!pipe)
   {
      return "popen failed!";
   }
   // read till end of process:
   while (!feof(pipe))
   {
      // use buffer to read and add to result
      if (fgets(buffer, 128, pipe) != NULL)
         result += buffer;
   }
   pclose(pipe);
   return result;
}
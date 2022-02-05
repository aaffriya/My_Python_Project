#include <bits/stdc++.h>
using namespace std;

class Student
{
private:
    char name[32];
    short eng, hindi, math, sci, cs;
    bool marks_update = false;
    char grade;

public:
    void setdata();
    void getdata();
    void get_grade();
};

short n;
int main()
{
    cout << "Enter Size of Student in the Class\n";
    cin >> n;
    Student obj[n];
    while (true)
    {
        char choice;
        system("cls");
        cout << "Welcome to Student Portal"
        <<"\n\tPress 1 for Set Data"
        <<"\n\tPress 2 for Get Data"
        <<"\n\tPress 3 for Grade"
        <<"\n\tPress 4 for Exit"
        <<"\n";
        cin >> choice;
        short n;
        system("cls");
        if (choice == '1')
        {
            cout << "Enter Roll no : \n";
            cin >> n;
            obj[n].setdata();
        }
        else if (choice == '2')
        {
            cout << "Enter Roll no : \n";
            cin >> n;
            obj[n].getdata();
        }
        else if (choice == '3')
        {
            cout << "Enter Roll no : \n";
            cin >> n;
            obj[n].get_grade();
        }
        else if (choice == '4')
        {
            break;
        }
        else
        {
            cout << "\t\tTry again!\n";
            system("pause");
        }
    }

    return 0;
}

void Student::setdata()
{
    system("cls");
    if (name[0] == '\0')
    {
        cout << "Please Enter First your name :\n";
        cin.ignore();
        cin.getline(name, 32);
    }
    if (name[0] != '\0')
    {
        cout << "\nEnter Student marks out of 100\n";
        cout << "Enter marks in English: \n";
        cin >> eng;
        cout << "Enter marks in Hindi:  \n";
        cin >> hindi;
        cout << "Enter marks in Math:  \n";
        cin >> math;
        cout << "Enter marks in Science:  \n";
        cin >> sci;
        cout << "Enter marks in Computer science:  \n";
        cin >> cs;

        system("cls");
        marks_update = true;
        cout << "Student Record,s Successfully!\n\n";
        system("pause");
    }
}

void Student::get_grade()
{
    if (marks_update)
    {
        float avg = (eng + hindi + math + sci + cs) / 5.0F;
        if (avg >= 90)
            grade = 'A';
        else if (avg >= 75)
            grade = 'B';
        else if (avg >= 60)
            grade = 'C';
        else
            grade = 'F';
        system("cls");
        cout << "\tStudent Grade is " << grade << "\n\n";
        system("pause");
    }
    else
    {
        system("cls");
        cout << "\tPlese Enter First Your Marks\n\n";
        system("pause");
    }
}

void Student::getdata()
{
    system("cls");
    if (marks_update)
    {
        cout << "Hello, " << name << " Your Marks is..."
        << "\n\nMark in English -> " << eng
        << "\nMark in Hindi -> " << hindi
        << "\nMark in Math -> " << math
        << "\nMark in Science -> " << sci
        << "\nMark in Computer science -> " << cs
        <<"\n\n";
        system("pause");
    }
    else
    {
        cout << "Please Set your marks first\n\n";
        system("pause");
    }
}

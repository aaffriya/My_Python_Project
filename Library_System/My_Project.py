class Library:
    Library_Name = "Bal Bhawan District Library Rewari"
    Library_Books_record = ("Python ML", "Python DSA", "Python NumPy", "Python Pandas")
    Available_Books_record = list(Library_Books_record)
    def List_books():
        serial = 0
        print("====== List of Available Books ======")
        for book in Library.Available_Books_record:
            serial+=1
            print(f"{serial}." ,"=>", book)
        else:
            serial = 0 

class Students:
    def Borrow_book():
        Library.List_books()
        try:
            borrow_choice = input("Which Book you want to Borrow.\n:")
            if not borrow_choice in Library.Library_Books_record:
                print(f"Alert: Sorry, {borrow_choice} is not Available in this Library.")
            else:
                if not borrow_choice in Library.Available_Books_record:
                    print("Alert: Sorry, This Book is already Borrowed by Someone.")
                else:
                    Library.Available_Books_record.remove(borrow_choice)
                    print("Alert: You have been Successfully given a book borrow ")
        except:
                print("Alert: Please, enter a Available Book only")
              
    def Return_book():
        try:
            return_input = input("Which book you want to Return.\n:")
            if return_input in Library.Library_Books_record:
                if not return_input in Library.Available_Books_record:
                    Library.Available_Books_record.append(return_input)
                    print("Alert: Thank You For Returned book..")
                else:
                    print(f"Alert: {return_input} is not Borrow in Past.")
            else:
                print("Alert: This Book Record not found in Library.")
        except Exception as e:
            print(e)
while True:
    print(f"\n\t\t\tWelcome to\n\t\t{Library.Library_Name}\n\t\tPress 1. for List Books\n\t\tPress 2. for Borrow Book\n\t\tPress 3. For Return Book\n\t\tPress 4. for Exit\n")
    try:
        choice = int(input("Enter your Menu Choice.\n:"))
        if choice == 1:
            Library.List_books()
        elif choice == 2:
            Students.Borrow_book()
        elif choice == 3:
            Students.Return_book()
        elif choice == 4:
            break
        else:
            print("Alert: Choose Correct Choice")
    except:
        print("Alert: Enter Correct Menu Number")
#include <iostream>
#include <iomanip>
#include <thread>
#include <string>
#include <chrono>
using namespace std;

void log(string msg)
{
    //this_thread::sleep_for(chrono::milliseconds(1000));

    auto tid = this_thread::get_id();

    cout << tid << setw(5) << ": " << msg << "\n";
}

void displayPlus()
{
    log("displayPlus starts");

    for (size_t i = 0; i < 500; i++)
    {
        cout << "+";
    }

    log("displayPlus ends");
}

void displayMinus()
{
    log("displayMinus starts");

    for (size_t i = 0; i < 500; i++)
    {
        cout << "-";
    }

    log("displayMinus starts");
}

int main()
{
    log("Main thread starts");

    //Create and start thread 1 and 2
    thread t1(displayPlus);
    thread t2(displayMinus);

    log("Main thread waits");


    //Blocks the current thread (MT)
    //until t1 finishes execution
    t1.join();
    t2.join();

    log("Main thread ends");

    system("note");
}
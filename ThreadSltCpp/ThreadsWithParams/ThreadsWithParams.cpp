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

void countEvenNumber(int from, int to)
{
    int count = 0;

    log("countEvenNumber starts");

    for (size_t i = from; i < to; i++)
    {
        if (i % 2 == 0)
        {
            count++;
        }
    }

    cout << "Count: " << count << "\n";

    log("countEvenNumber ends");
}

int main()
{
    log("Main thread starts");

    thread t1(countEvenNumber, 100, 300000);
    thread t2(countEvenNumber, 100, 300000);
    thread t3(countEvenNumber, 100, 300000);
    thread t4(countEvenNumber, 100, 300000);

    t1.join();
    t2.join();
    t3.join();
    t4.join();

    log("Main thread ends");
}
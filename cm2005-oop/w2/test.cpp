#include <iostream>
using namespace std;

int main(){
   int sum = 0;
   int count = 3;
   do{
      sum++;
   }
   while(count < 3);
   std::cout << sum << std::endl;
   return 0;
}
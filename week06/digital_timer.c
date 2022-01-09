#include <stdio.h>
// #include <windows.h>
#include <unistd.h>
#ifdef __cplusplus__
  #include <cstdlib>
#else
  #include <stdlib.h>
#endif

int main()
{
    int h = 0, m = 0, s = 0;

    while(1) {

        for (h = 0; h < 60; h++) {
            for (m = 0; m < 60; m++) {
                for (s = 0; s < 59; s++) {
                    system("clear");
                    printf("%02d : %02d : %02d ", h, m, s);
                    fflush(stdout);
                    sleep(1);
                }
            }
        }

        // system("clear");
        // printf("%02d : %02d : %02d\r", h, m, s);

        // s++;
        // if (s % 60 == 0) {
        //     s = 0;
        //     m++;
        //     if (m % 60 == 0) {
        //         m = 0;
        //         h++;
        //         // if (h % 24 == 0) {
        //             h = 0;
        //         }
        //     }
        // }
        // Sleep(1000);
        // sleep(1);
    }
    
    return 0;
}
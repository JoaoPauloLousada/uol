package main

import (
	"fmt"
	"math"
)

func main() {
	// A := []int{120, 99, 117, 315, 487, 50}
	A := []int{99, 24, 5, 108}
	C := RadixSort(A, 4, 3)
	fmt.Println(A)
	fmt.Println(C)
}

// A array of numbers
// N number of elements in A
// d number of digits of the largest number
func RadixSort(A []int, N int, d int) []int {
	for i := 0; i < d; i++ {
		A = Sort(A, N, i)
		fmt.Println("loop", i, A)
	}
	return A

}

func Sort(A []int, N int, d int) []int {
	R := make([]int, len(A))
	r := 0
	for i := 0; i < 10; i++ {
		for j := 0; j < N; j++ {
			digit := int(A[j]/int(math.Pow(10, float64(d)))) % 10
			if digit == i {
				R[r] = A[j]
				r += 1
			}
		}
	}
	return R
}

package main

import (
	"fmt"
)

func main() {
	A := []int{120, 99, 117, 315, 487, 50}
	C := RadixSort(A, 3)
	fmt.Println(A)
	fmt.Println(C)
}

// RadixSort
// d int is the number of digits
func RadixSort(A []int, d int) []int {
	max := MaxInSlice(A)
	for exp := 1; max/exp > 0; exp *= 10 {
		A = CountingSortByDigit(A, exp)
	}
	return A
}

func MaxInSlice(A []int) int {
	max := A[0]
	for i := 1; i < len(A); i++ {
		if A[i] > max {
			max = A[i]
		}
	}
	return max
}

// CountingSort
// A []int
// exp is the exponential
func CountingSortByDigit(A []int, exp int) []int {
	n := len(A)
	output := make([]int, n)
	count := make([]int, 10)
	for i := 0; i < len(A); i++ {
		digit := (A[i] / exp) % 10
		count[digit] += 1
	}
	for i := 1; i < 10; i++ {
		count[i] = count[i] + count[i-1]
	}
	for i := n - 1; i >= 0; i-- {
		digit := (A[i] / exp) % 10
		count[digit]--
		output[count[digit]] = A[i]
	}
	return output
}

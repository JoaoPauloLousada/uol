package main

import "fmt"

func main() {
	A := []int{1, 5, 2, 2, 3, 6, 3}
	R := CountingSort(A, 6)
	fmt.Println(A, R)
}

// CountingSort
// A []int
// A int is the max value in A
func CountingSort(A []int, k int) []int {
	C := make([]int, k+1)
	R := make([]int, len(A))
	p := 0
	for i := 0; i < len(A); i++ {
		C[A[i]] += 1
	}
	for i := 0; i < k+1; i++ {
		// largest to smallest
		// for i := k; i >= 0; i-- {
		j := p
		for j < p+C[i] {
			R[j] = i
			j++
		}
		p = j
	}
	return R
}

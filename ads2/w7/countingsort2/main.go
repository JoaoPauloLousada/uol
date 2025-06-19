package main

import "fmt"

func main() {
	A := []int{-8, -3, -1, 5, 1}
	R := CountingSort(A, 5, -8)
	fmt.Println(A, R)
}

// CountingSort
// A []int
// A int is the max value in A
func CountingSort(A []int, k int, kmin int) []int {
	C := make([]int, k-kmin+1)
	R := make([]int, len(A))
	p := 0
	for i := 0; i < len(A); i++ {
		C[A[i]-kmin] += 1
	}
	for i := 0; i < k-kmin+1; i++ {
		// largest to smallest
		// for i := k; i >= 0; i-- {
		j := p
		for j < p+C[i] {
			R[j] = i + kmin
			j++
		}
		p = j
	}
	return R
}

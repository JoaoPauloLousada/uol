package main

import "fmt"

func main() {
	A := []int{5, 2, 7, 3, 4}
	Sort(A, 5)
	fmt.Println(A)
	A = []int{5, 2, 7, 3, 4}
	SortDesc(A, 5)
	fmt.Println(A)
	A = []int{5, 2, 7, 3, 4}
	r := X(A, 0, 3)
	fmt.Println(r, A)
	A = []int{4, 21, 35, 1, 9, 84}
	F(A, 0, 2, 5)
	fmt.Println("F", A)
}

func Sort(A []int, N int) {
	for j := 1; j <= N-1; j++ {
		ins := A[j]
		i := j - 1
		for i >= 0 && ins < A[i] {
			A[i+1] = A[i]
			i = i - 1
		}
		A[i+1] = ins
	}
}

// [5, 2, 7, 3, 4]
func SortDesc(A []int, N int) {
	for j := 1; j <= N-1; j++ {
		ins := A[j]
		i := j - 1
		for i >= 0 && ins > A[i] {
			A[i+1] = A[i]
			i = i - 1
		}
		A[i+1] = ins
	}
}

// What value does the algorithm return for the following input data?
// A: [5,2,7,3,4]
// low: 0
// high: 3
func X(A []int, low int, high int) int {
	elem := A[high]
	i := low
	for j := i; j < high; j++ {
		if A[j] <= elem {
			aux := A[i]
			A[i] = A[j]
			A[j] = aux
			i = i + 1
		}
	}
	aux := A[high]
	A[high] = A[i]
	A[i] = aux
	return i
}

// i = 0
// j = 0 -> [5,2,7,3,4]
// A[j] = 5
// elem = 3
// A = [5,2,7,3,4]

// j = 1
// A[j] = 2
// elem = 3

// j = 2
// A[j] = 7
// elem = 3
// A = [7, 2, 5, 3, 4]
// i = 1

// A: [4, 21, 35, 1, 9, 84]
// low: 0
// mid: 2
// high: 5
func F(A []int, low int, mid int, high int) {
	B := [6]int{}
	for i := 0; i <= mid; i++ {
		// B=append(B, A[i])
		B[i] = A[i]
	}
	C := [6]int{}
	for i := 0; i < high-mid; i++ {
		C[i] = A[i+mid+1]
	}
	i := 0
	j := 0
	k := 0
	for i <= mid && j < high-mid {
		if B[i] < C[j] {
			A[k] = B[i]
			i += 1
		} else {
			A[k] = C[j]
			j += 1
		}
		k += 1
	}
	if i > mid {
		for m := j; m < high-mid; m++ {
			A[k] = C[m]
			k += 1
		}
	}
	if j >= high-mid {
		for m := 1; m < mid+1; m++ {
			A[k] = B[m]
			k += 1
		}
	}
}

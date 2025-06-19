package main

import "fmt"

/*
Bubble Sort repeatedly steps through the array, compares adjacent elements,
and swaps them if they are in the wrong order.
This way, larger elements "bubble up" to the end of the array.

Characteristics
In-place: Uses constant extra space
Stable: Maintains relative order of equal elements
Simple, but inefficient for large datasets
Good for educational purposes and small inputs

Pseudocode
for i = 0 to n - 2
    for j = 0 to n - 2 - i
        if A[j] > A[j + 1]
            swap A[j] and A[j + 1]
*/

func main() {
	A1 := []int{1, 2, 3, 4, 5}
	BubbleSort(A1)
	fmt.Println("A1", A1)
	A2 := []int{5, 4, 3, 2, 1}
	BubbleSort(A2)
	fmt.Println("A2", A2)
	A3 := []int{7, 7, 8, 7, 7}
	BubbleSort(A3)
	fmt.Println("A3", A3)
	A4 := []int{4, 1, 3, 2, 5}
	BubbleSort(A4)
	fmt.Println("A4", A4)
	A5 := []int{1, 6, 2, 5, 3, 4}
	BubbleSort(A5)
	fmt.Println("A5", A5)
	A6 := []int{3, -1, 4, -5, 2}
	BubbleSort(A6)
	fmt.Println("A6", A6)
}

func BubbleSort(A []int) {
	N := len(A)
	for i := 0; i < N-1; i++ {
		for j := 0; j < N-1-i; j++ {
			if A[j] > A[j+1] {
				A[j], A[j+1] = A[j+1], A[j]
			}
		}
	}
}

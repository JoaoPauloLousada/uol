package main

import "fmt"

/*
Selection sort

1 - Start with the first element of the array.

2 - Find the smallest element in the unsorted part.

3 - Swap it with the current position.

4 - Move the boundary of the sorted part one element to the right.

5 - Repeat until the array is sorted.

Characteristics:
In-place: Uses constant extra space.
Not stable (can be made stable with modifications).
Performs well on small arrays.
Very predictable behavior (not data-dependent).

Pseudocode
A: array of element
N: number of elements in the array
function SelectionSort(A, N) {
for i = 0 to N - 2
    minIndex = i
    for j = i + 1 to N - 1
        if A[j] < A[minIndex]
            minIndex = j
    swap A[i] with A[minIndex]
*/

func main() {
	A := []int{5, 2, 7, 3, 4}
	SelectionSort(A, 5)
	fmt.Println("A", A)
}

func SelectionSort(A []int, N int) {
	for i := 0; i < N-1; i++ {
		minIndex := i
		for j := i; j < N; j++ {
			if A[j] < A[minIndex] {
				minIndex = j
			}
		}
		A[i], A[minIndex] = A[minIndex], A[i]
	}
}

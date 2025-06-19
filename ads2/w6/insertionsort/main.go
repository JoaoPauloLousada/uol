package main

import "fmt"

/*
Insertion sort

How Insertion Sort Works:
1- Insertion Sort builds the sorted array one element at a time:
2- Start from the second element (index 1).
3- Compare it with the elements before it.
4- Shift larger elements one position to the right.
5- Insert the current element into the correct position.

| Case    | Comparisons | Shifts   | Time Complexity         |
| ------- | ----------- | -------- | ----------------------- |
| Best    | $O(n)$      | $O(0)$   | $O(n)$ (already sorted) |
| Average | $O(n^2)$    | $O(n^2)$ | $O(n^2)$                |
| Worst   | $O(n^2)$    | $O(n^2)$ | $O(n^2)$                |

Characteristics:
In-place: No extra space needed
Stable: Preserves the relative order of equal elements
Efficient for small or nearly sorted arrays
Simple to implement

Pseudocode:
for i = 1 to n - 1

	key = A[i]
	j = i - 1
	while j >= 0 and A[j] > key
	    A[j + 1] = A[j]
	    j = j - 1
	A[j + 1] = key
*/
func main() {
	A1 := []int{1, 2, 3, 4, 5}
	InsertionSort(A1)
	fmt.Println("A1", A1)
	A2 := []int{5, 4, 3, 2, 1}
	InsertionSort(A2)
	fmt.Println("A2", A2)
	A3 := []int{7, 7, 8, 7, 7}
	InsertionSort(A3)
	fmt.Println("A3", A3)
	A4 := []int{4, 1, 3, 2, 5}
	InsertionSort(A4)
	fmt.Println("A4", A4)
	A5 := []int{1, 6, 2, 5, 3, 4}
	InsertionSort(A5)
	fmt.Println("A5", A5)
	A6 := []int{3, -1, 4, -5, 2}
	InsertionSort(A6)
	fmt.Println("A6", A6)
}

func InsertionSort(A []int) {
	N := len(A)
	for i := 1; i < N; i++ {
		key := A[i]
		j := i - 1
		for j >= 0 && A[j] > key {
			A[j+1] = A[j]
			j -= 1
		}
		A[j+1] = key
	}
}

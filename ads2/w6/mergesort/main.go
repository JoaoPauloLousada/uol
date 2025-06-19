package main

import "fmt"

/*
Merge sort
Merge Sort works by recursively dividing the array into smaller parts, sorting them, and then merging them back together in order.

🔁 Steps:
Divide the array into two halves.
Recursively sort each half.
Merge the two sorted halves into a single sorted array.

| Case    | Time Complexity |
| ------- | --------------- |
| Best    | $O(n \log n)$   |
| Average | $O(n \log n)$   |
| Worst   | $O(n \log n)$   |

Pseudocode:
function mergeSort(A, left, right)

	if left < right
	    mid = (left + right) / 2
	    mergeSort(A, left, mid)
	    mergeSort(A, mid + 1, right)
	    merge(A, left, mid, right)

function merge(A, left, mid, right)

	create temp arrays L = A[left..mid], R = A[mid+1..right]
	i, j, k = 0
	while i < len(L) and j < len(R)
	    if L[i] <= R[j]
	        A[k] = L[i]
	        i++
	    else
	        A[k] = R[j]
	        j++
	    k++
	copy remaining elements from L or R into A
*/
func main() {
	A1 := []int{1, 2, 3, 4, 5}
	MergeSort(A1, 0, 4)
	fmt.Println("A1", A1)
	A2 := []int{5, 4, 3, 2, 1}
	MergeSort(A2, 0, 4)
	fmt.Println("A2", A2)
	A3 := []int{7, 7, 8, 7, 7}
	MergeSort(A3, 0, 4)
	fmt.Println("A3", A3)
	A4 := []int{4, 1, 3, 2, 5}
	MergeSort(A4, 0, 4)
	fmt.Println("A4", A4)
	A5 := []int{1, 6, 2, 5, 3, 4}
	MergeSort(A5, 0, 5)
	fmt.Println("A5", A5)
	A6 := []int{3, -1, 4, -5, 2}
	MergeSort(A6, 0, 4)
	fmt.Println("A6", A6)
}

func MergeSort(A []int, left int, right int) {
	if left < right {
		mid := (left + right) / 2
		MergeSort(A, left, mid)
		MergeSort(A, mid+1, right)
		Merge(A, left, mid, right)
	}
}

func Merge(A []int, left, mid, right int) {
	L := make([]int, mid-left+1)
	copy(L, A[left:mid+1])

	R := make([]int, right-mid)
	copy(R, A[mid+1:right+1])
	i, j, k := 0, 0, left
	for i < len(L) && j < len(R) {
		if L[i] <= R[j] {
			A[k] = L[i]
			i++
		} else {
			A[k] = R[j]
			j++
		}
		k++
	}
	for i < len(L) {
		A[k] = L[i]
		i++
		k++
	}
	for j < len(R) {
		A[k] = R[j]
		j++
		k++
	}
}

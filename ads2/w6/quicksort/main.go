package main

import "fmt"

/*
Quick sort

⚡️ How Quick Sort Works
Quick Sort is a divide-and-conquer algorithm:
Pick a pivot element from the array.
Partition the array so that:
All elements less than or equal to the pivot go to the left
All elements greater than the pivot go to the right
Recursively apply the same process to the left and right subarrays.

| Case    | Partitioning Quality                           | Time Complexity |
| ------- | ---------------------------------------------- | --------------- |
| Best    | Balanced                                       | $O(n \log n)$   |
| Average | Random data                                    | $O(n \log n)$   |
| Worst   | Unbalanced (e.g., sorted input with bad pivot) | $O(n^2)$        |

✅ Characteristics
In-place (only uses stack for recursion)
Not stable by default
Very efficient in practice
Widely used (e.g., C’s qsort, Java’s Arrays.sort for primitives)

Pseudocode:
function quickSort(A, low, high)

	if low < high
	    pivotIndex = partition(A, low, high)
	    quickSort(A, low, pivotIndex - 1)
	    quickSort(A, pivotIndex + 1, high)

partition pseudocode (Lomuto version):
function partition(A, low, high)

	pivot = A[high]
	i = low
	for j = low to high - 1
	    if A[j] <= pivot
	        swap A[i], A[j]
	        i = i + 1
	swap A[i], A[high]
	return i
*/
func main() {
	A1 := []int{1, 2, 3, 4, 5}
	QuickSort(A1, 0, 4)
	fmt.Println("A1", A1)
	A2 := []int{5, 4, 3, 2, 1}
	QuickSort(A2, 0, 4)
	fmt.Println("A2", A2)
	A3 := []int{7, 7, 8, 7, 7}
	QuickSort(A3, 0, 4)
	fmt.Println("A3", A3)
	A4 := []int{4, 1, 3, 2, 5}
	QuickSort(A4, 0, 4)
	fmt.Println("A4", A4)
	A5 := []int{1, 6, 2, 5, 3, 4}
	QuickSort(A5, 0, 5)
	fmt.Println("A5", A5)
	A6 := []int{3, -1, 4, -5, 2}
	QuickSort(A6, 0, 4)
	fmt.Println("A6", A6)

}

func QuickSort(A []int, low int, high int) {
	if low < high {
		pivotIndex := Partition(A, low, high)
		QuickSort(A, low, pivotIndex-1)
		QuickSort(A, pivotIndex+1, high)
	}
}

func Partition(A []int, low int, high int) int {
	pivot := A[high]
	i := low
	for j := low; j < high; j++ {
		if A[j] <= pivot {
			A[i], A[j] = A[j], A[i]
			i += 1
		}
	}
	A[i], A[high] = A[high], A[i]
	return i
}

// A: [5,4,3,2,1]
// low: 0
// high: 4
// i = 0
// j = 0
// // A[j] = 5, pivot = 1
// j = 1
// // A[j] = 4, pivot = 1
// ...
// A[i] = 5, A[high] = 1

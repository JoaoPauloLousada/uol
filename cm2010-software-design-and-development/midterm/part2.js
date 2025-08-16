console.log("================================================");
console.log("### TDD for point_is_in_box ###");
console.log("================================================");

// CYCLE 1: Basic functionality test
console.log("--- CYCLE 1 ---");

// Test 1: Simple test that function cannot pass initially
function test1() {
    console.log("Test 1: Point clearly inside box");
    // Point (5, 5) should be inside box with top corner (0, 0), width 10, height 10
    const result = point_is_in_box(5, 5, 0, 0, 10, 10);
    const expected = true;
    
    if (result === expected) {
        console.log("✓ PASS: Point (5,5) correctly detected inside box");
        return true;
    } else {
        console.log("✗ FAIL: Point (5,5) should be inside box but got:", result);
        return false;
    }
}

// V1: Initial minimal implementation (this will fail)
function point_is_in_box_v1(pointX, pointY, boxTopCornerX, boxTopCornerY, boxWidth, boxHeight) {
    return false;
}

console.log("\nRunning test with V1 (should fail):");
let point_is_in_box = point_is_in_box_v1;
test1();

function point_is_in_box_v2(pointX, pointY, boxTopCornerX, boxTopCornerY, boxWidth, boxHeight) {
    return true;
}

console.log("\nRunning test with V2 (should pass):");
point_is_in_box = point_is_in_box_v2;
test1();


// CYCLE 2: Edge case - point outside box
console.log("\n--- CYCLE 2 ---");

// Test 2: Point clearly outside box
function test2() {
    console.log("Test 2: Point clearly outside box");
    // Point (-1, -1) should be outside box with top corner (0, 0), width 10, height 10
    const result = point_is_in_box(-1, -1, 0, 0, 10, 10);
    const expected = false;
    
    if (result === expected) {
        console.log("✓ PASS: Point (-1,-1) correctly detected outside box");
        return true;
    } else {
        console.log("✗ FAIL: Point (-1,-1) should be outside box but got:", result);
        return false;
    }
}

console.log("\nRunning test2 with V2 (should fail):");
test1();
test2();

function point_is_in_box_v3(pointX, pointY, boxTopCornerX, boxTopCornerY, boxWidth, boxHeight) {
    return pointX >= boxTopCornerX && pointX <= boxTopCornerX + boxWidth &&
           pointY >= boxTopCornerY && pointY <= boxTopCornerY + boxHeight;
}

point_is_in_box = point_is_in_box_v3;
console.log("\nRunning test2 with V3 (should pass):");
test1()
test2();

// CYCLE 3: Edge case - point on boundary
console.log("\n--- CYCLE 3 ---");

// Test 3: Point on boundary edge case
function test3() {
    console.log("Test 3: Point exactly on box boundary");
    // Point (10, 10) is on the edge of box with top corner (0, 0), width 10, height 10
    const result = point_is_in_box(10, 10, 0, 0, 10, 10);
    const expected = false;
    
    if (result === expected) {
        console.log("✓ PASS: Point (10,10) correctly detected outside box (boundary exclusive)");
        return true;
    } else {
        console.log("✗ FAIL: Point (10,10) should be outside box (boundary exclusive) but got:", result);
        return false;
    }
}

console.log("\nRunning test3 with V3 (should fail):");
test1();
test2();
test3();


// V2: Updated implementation to handle boundary correctly
// Updated to make boundaries exclusive (< instead of <=)
function point_is_in_box_v4(pointX, pointY, boxTopCornerX, boxTopCornerY, boxWidth, boxHeight) {
    return pointX >= boxTopCornerX && pointX < boxTopCornerX + boxWidth &&
           pointY >= boxTopCornerY && pointY < boxTopCornerY + boxHeight;
}

console.log("\nRunning test3 with V4 (should pass both):");
point_is_in_box = point_is_in_box_v4;
test1();
test2();
test3();

console.log("================================================");
console.log("### TDD for compute_damage ###");
console.log("================================================");

// CYCLE 1: Basic functionality test
console.log("--- CYCLE 1 ---");
function compute_damage_test1() {
    const result = compute_damage(100, 0, 0, 0, 0, 0);
    const expected = 100;

    if (result === expected) {
        console.log("✓ PASS: compute_damage(100, 0, 0, 0, 0, 0) correctly returned 100");
        return true;
    } else {
        console.log("✗ FAIL: compute_damage(100, 0, 0, 0, 0, 0) should return 100 but got:", result);
        return false;
    }
}

// V1: Initial minimal implementation (this will fail)
function compute_damage_v1(weapon_power, playerX, playerY, explosionX, explosionY) {
    return 0;
}
let compute_damage = compute_damage_v1;
console.log("\nRunning test1 with V1 (should fail):");
compute_damage_test1();

// V2: Updated implementation to handle boundary correctly
function compute_damage_v2(weapon_power, playerX, playerY, explosionX, explosionY) {
    return 100;
}
compute_damage = compute_damage_v2;
console.log("\nRunning test1 with V2 (should pass):");
compute_damage_test1();

// CYCLE 2: explosion and playe in different position
console.log("\n--- CYCLE 2 ---");
function compute_damage_test2() {
    const result = compute_damage(100, 0, 0, 10, 10);
    const expected = 90;

    if (result === expected) {
        console.log("✓ PASS: compute_damage(100, 0, 0, 10, 10) correctly returned 90");
        return true;
    } else {
        console.log("✗ FAIL: compute_damage(100, 0, 0, 10, 10) should return 90 but got:", result);
        return false;
    }
}

console.log("\nRunning test2 with V2 (should fail):");
compute_damage_test1();
compute_damage_test2();

function compute_damage_v3(weapon_power, playerX, playerY, explosionX, explosionY) {
    const x = Math.abs(playerX - explosionX);
    const y = Math.abs(playerY - explosionY);
    const distance = (x + y) / 2;
    return 100 - distance;
}

console.log("\nRunning test2 with V3 (should pass):");
compute_damage = compute_damage_v3;
compute_damage_test1();
compute_damage_test2();

// CYCLE 3: different weapon power
console.log("\n--- CYCLE 3 ---");
function compute_damage_test3() {
    const result1 = compute_damage(100, 0, 0, 0, 0);
    const result2 = compute_damage(200, 0, 0, 0, 0);

    if (result1 !== result2) {
        console.log("✓ PASS: result1 and result2 are different", result1, result2);
        return true;
    } else {
        console.log("✗ FAIL: result1 and result2 should be different but got:", result1, result2);
        return false;
    }
}

console.log("\nRunning test3 with V3 (should fail):");
compute_damage_test1();
compute_damage_test2();
compute_damage_test3();

function compute_damage_v4(weapon_power, playerX, playerY, explosionX, explosionY) {
    const x = Math.abs(playerX - explosionX);
    const y = Math.abs(playerY - explosionY);
    const distance = (x + y) / 2;
    return weapon_power - distance;
}

compute_damage = compute_damage_v4;
console.log("\nRunning test3 with V4 (should pass):");
compute_damage_test1();
compute_damage_test2();
compute_damage_test3();

const isAnagram1 = (str1, str2) => {
    const map = {}
    const arr1 = str1.split("").sort().join("")
    const arr2 = str2.split("").sort().join("")
    return arr1 === arr2
}

const isAnagram = (str1, str2) => {
    const map = {}
    const arr1 = str1.split("")
    const arr2 = str2.split("")

    for (let item of arr1) {
        if (map[item]) {
            map[item]++
        } else {
            map[item] = 1
        }
    }

    for (let item of arr2) {
        if (map[item]) {
            map[item]--
        } else {
            map[item] = -1
        }
    }

    for (let item in map) {
        if (map[item] !== 0) {
            return false
        }
    }
    return true
}

const x = isAnagram('chiedwfwedfn', 'niche')
console.log(`%c ${new Date().toLocaleTimeString()}`,'color: greenyellow;', 'ln.12 - .(), x:', x)

const fibonacci = (n) => {
    // 1 1 2 3 5 8 13 21
    let x = 1
    let y = 1
    let z = x + y

    while (n > 0) {


        n--
    }

}

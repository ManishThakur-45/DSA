let prompt = require('prompt-sync')()
let n = Number(prompt('Enter A Number: '))

// 1. Single Row
console.log('\n1. Single Row')

for(let i = 1; i <= n; i++){
    process.stdout.write('* ')
}
console.log()


// 2. Square Pattern
console.log('\n2. Square Pattern')

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        process.stdout.write('* ')
    }
    console.log()
}


// 3. Increasing Right Angle Triangle
console.log('\n3. Increasing Right Angle Triangle')

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write('* ')
    }
    console.log()
}


// 4. Increasing Number Triangle
console.log('\n4. Increasing Number Triangle')

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(j + ' ')
    }
    console.log()
}


// 5. Capital Alphabet Triangle
console.log('\n5. Capital Alphabet Triangle')

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(String.fromCharCode(64 + j) + ' ')
    }
    console.log()
}


// 6. Small Alphabet Triangle
console.log('\n6. Small Alphabet Triangle')

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(String.fromCharCode(96 + j) + ' ')
    }
    console.log()
}


// 7. Decreasing Triangle
console.log('\n7. Decreasing Triangle')

for(let i = 0; i < n; i++){
    for(let j = 1; j <= n - i; j++){
        process.stdout.write('* ')
    }
    console.log()
}


// 8. Mirror / Right Aligned Triangle
console.log('\n8. Mirror / Right Aligned Triangle')

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        process.stdout.write('  ')
    }

    for(let j = 1; j <= i; j++){
        process.stdout.write('* ')
    }

    console.log()
}


// 9. Pyramid Pattern
console.log('\n9. Pyramid Pattern')

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        process.stdout.write('  ')
    }

    for(let j = 1; j <= 2 * i - 1; j++){
        process.stdout.write(' *')
    }

    console.log()
}

// 10. Hollow V Shape Pyramid Pattern
console.log('\n10. Hollow V Shape Pyramid Pattern')

for(let i = 1; i <= n; i++){
    for(let j = 1; j < i; j++){
        process.stdout.write(' ')
    }
    process.stdout.write('*')
    for(let j = 1; j <= 2 * (n - i) - 1; j++){
        process.stdout.write(' ')
    }
    if(i != n){
        process.stdout.write('*')
    }
    console.log()
}

// 11. Diamond Pattern
console.log('\n11. Diamond Pattern')
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        process.stdout.write(' ')
    }
    for(let j = 1; j <= 2 * i - 1; j++){
        process.stdout.write('*')
    }
    console.log()
}
for(let i = n - 1; i >= 1; i--){
    for(let j = 1; j <= n - i; j++){
        process.stdout.write(' ')
    }
    for(let j = 1; j <= 2 * i - 1; j++){
        process.stdout.write('*')
    }
    console.log()
}

//12. X Pattern
console.log('\n12.  X Pattern')
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        if(i == j || i + j == n + 1){
            process.stdout.write('* ')
        }else{
            process.stdout.write('  ')
        }
    }
    console.log()
}





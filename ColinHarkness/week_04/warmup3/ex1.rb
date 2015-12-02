# Sum of Squares and Squares of Sums
# The sum of the squares of the first ten natural numbers is,

# 1**2 + 2**2 + ... + 10**2 = 385

# The square of the sum of the first ten natural numbers is,

# (1 + 2 + ... + 10)**2 = 55**2 = 3025

# Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

# Make it so that it doesn't just work for the number 10.

def sum_of_squares
    i = 0
  (1..10).each do |n|
  i += n**2
  end
  i
end

def square_of_sums
  p = 0 
  s = 0
  i = 0
 (1..10).each do |n|
 s = (p += n)
 i = s**2
 end
 i
end

def difference
  d = 0
  d =square_of_sums.to_i - sum_of_squares.to_i
  puts d
end  

#difference

def sum_of_squares2(num = 10)
  result = 0
1.upto(num) { |i| result += (i ** 2)} 
result
end

def square_of_sums2(num = 10)
  result = 0
(1..num).reduce(:+) **2
end
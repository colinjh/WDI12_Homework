def prompt(message)
  print message
  gets.chomp
end

# choice = prompt("Please enter your choice: ")
# puts menu()

# puts "You entered your #{choice}"

def menu
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(p) - power"
  puts "(sr) - square root"
  puts "(q) - quit"
  prompt("Enter your choice: ").downcase
end

def add
  puts prompt('First number: ').to_f + prompt('second.number').to_f
end

def sub
  puts prompt('First number: ').to_f - prompt('second.number').to_f
end

def multi
  puts prompt('First number: ').to_f * prompt('second.number').to_f
end

def div
  puts prompt('First number: ').to_f / prompt('second.number').to_f
end

def pow
  puts prompt('Base number: ').to_f ** prompt('Power:').to_f
end

def squ
  print ('number: ')
  x = gets.to_f
  puts Math.sqrt(x)
end


choice = menu()

until choice == 'q'
  case choice
    when 'a'
      add()
    when 's'
      sub()  
    when 'm'
      multi()
    when 'd'
      div()
    when 'p'
      pow()
    when 'sr'
      squ()
    else
      puts "Invalid choice"        
    end

  choice = menu()
end

puts "crappy calc" 


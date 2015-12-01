# MTA Lab
# Objectives:

# Apply your knowledge of Javascript to solve a real world problem.
# Get really good at array manipulation.
# Activity

# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

# // console.log() shows output similar to this:
# // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# requires 'pry'
# binding.pry
def mta
  {
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"], 
    :L => ["8th", "6th", "Union Square", "3rd", "1st"],
    :L6 => ["Grand Station", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end



def mta_trip( line1, start, line2, stop )
  trip = []
  trip2 = []

  if line1 == line2
    start_index = mta[line1].index(start)
    stop_index = mta[line2].index(stop)
    if stop_index > start_index  
      mta[line1][start_index..stop_index].each do |stop|
        trip << stop  
      end
    else
      mta[line1][stop_index..start_index].reverse.each do |stop|
        trip << stop
      end      
    end
    puts trip.join(" ")
  else
    
    start_index = mta[line1].index(start)
    start_intersect = mta[line1].index("Union Square")
    stop_intersect = mta[line2].index("Union Square")
    stop_index = mta[line2].index(stop)

    if start_intersect > start_index
      mta[line1][start_index..start_intersect].each do |stop|
        trip << stop
      end 
    else
      mta[line1][start_intersect..start_index].reverse.each do |stop|
        trip << stop
      end       
    end

    if stop_index > stop_intersect
      mta[line2][stop_intersect..stop_index].each do |stop|
        trip2 << stop
      end
    else
      mta[line2][stop_index..start_intersect].reverse.each do |stop|
        trip2 << stop
      end        
    end  
  end
    puts "From #{start} to #{stop}"
    puts trip.join(" ")
    puts "Change at Union"
    puts trip2.join(" ")    
end


def popup
  print "Please select starting train line: (N, L, L6)"
  line1 = gets.chomp.to_sym
  if line1 == :N
    puts "Platform?: Times Square, 34th, 28th, 23rd, Union Square, 8th"
    start = gets.chomp.to_s
  elsif line1 == :L
    puts "Platform?: 8th, 6th, Union Square, 3rd, 1st"
    start = gets.chomp.to_s
  else
    puts "Platform?: Grand Station, 33rd, 28th, 23rd, Union Square, Astor Place"
    start = gets.chomp.to_s  
  end      
  print "Please select end train line: (N, L, L6)"
  line2 = gets.chomp.to_sym
  if line2 == :N
    puts "Platform?: Times Square, 34th, 28th, 23rd, Union Square, 8th"
    stop = gets.chomp.to_s
  elsif line2 == :L
    puts "Platform?: 8th, 6th, Union Square, 3rd, 1st"
    stop = gets.chomp.to_s
  else
    puts "Platform?: Grand Station, 33rd, 28th, 23rd, Union Square, Astor Place"
    stop = gets.chomp.to_s  
  end
  mta_trip(line1, start, line2, stop)
end

popup      

#mta_trip(:N, "34th", :L6, "33rd")
#mta_trip(:L, "8th", :L6, "Grand Station")

#mta_trip(:N, "Times Square", :L6, "Astor Place")



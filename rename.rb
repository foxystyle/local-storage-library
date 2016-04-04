def find_and_rename file_name, file_name_min
  #
  puts "Current name? (Default was `$ls`)"
  current_name = gets.chomp
  puts "New name? (Recommended JS library sign prefix ($))"
  new_name = gets.chomp
  #
  File.open(file_name, 'r+:UTF-8') do |file|
    file_content =
      file
        .read
        .sub("var #{current_name} = ", "var #{new_name} = ")
        .gsub current_name+".", new_name+"."
    file.rewind
    file.truncate(0)
    file.write file_content
  end
  #
  File.open(file_name_min, 'r+:UTF-8') do |file|
    file_content =
      file
        .read
        .sub("var #{current_name}=","var #{new_name}=")
        .gsub current_name+".", new_name+"."
    file.rewind
    file.truncate(0)
    file.write file_content
  end
end
#
find_and_rename "localstorage.js", "localstorage.min.js"
puts "Task complete."

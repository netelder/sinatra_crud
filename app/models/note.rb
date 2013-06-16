class Note < ActiveRecord::Base
	validates :title, :content, :presence => true
  # Remember to create a migration!
end

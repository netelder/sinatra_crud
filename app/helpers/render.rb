helpers do

	def _notelist(notes)
    ret_str=""
    @notes.each do |note|
      ret_str="<li>note.title</li><ul class=\"content\"><li>
      note.content</li></ul>"
    end
    ret_str
  end

end

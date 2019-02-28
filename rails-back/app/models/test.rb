class Test < ActiveRecord::Base
	belongs_to :feature, foreign_key: 'featureid'
end

class Feature < ActiveRecord::Base
has_many :tests, foreign_key: :featureid, dependent: :destroy
end

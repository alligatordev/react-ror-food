class Product < ApplicationRecord
  belongs_to :product_category
  has_many :order_products

  validates_associated :product_category
  validates :price, presence: true
  validates :name, presence: true
end

require 'compass'

extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('SassySort', :path => extension_path)

#  Version is a number. If a version contains alphas, it will be created as a prerelease version
#  Date is in the form of YYYY-MM-DD
module SassySort
  VERSION = "1.0.0"
  DATE = "2014-12-30"
end

module Sass::Script::Functions

end

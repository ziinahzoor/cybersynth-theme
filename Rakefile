require 'fileutils'
require 'rake'
require 'rubygems/package_task'

task default: [:build, :clean]

desc 'Build gem'
task :build do
	spec = Gem::Specification.load('cybersynth-theme.gemspec')

	Gem::PackageTask.new(spec) do |pkg|
		pkg.package_dir = 'build'
	end

	Rake::Task[:package].invoke
	Rake::Task[:clean].invoke
end

desc 'Clean generated files'
task :clean do
	Dir.glob("build/*/").each do |dir|
		FileUtils.rm_rf(dir)
	end
end
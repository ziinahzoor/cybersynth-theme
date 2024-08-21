# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "cybersynth-theme"
  spec.summary       = "A cyberpunk theme with header navigation"
  spec.homepage      = "https://github.com/ziinahzoor/cybersynth-theme"
  spec.version       = "0.1.5"
  spec.license       = "MIT"

  spec.authors       = ["Rafael Rosa Becker dos Santos"]
  spec.email         = ["rafaelxsantosx@hotmail.com"]

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|CHANGELOG|LICENSE|README|_config\.yml)!i) }

  spec.required_ruby_version = '>= 2.5.0'
  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"

  spec.metadata = {
    'homepage_uri'      => spec.homepage,
    'source_code_uri'   => spec.homepage,
    'changelog_uri'     => spec.homepage + '/blob/main/CHANGELOG.md',
    'documentation_uri' => spec.homepage + '/blob/main/README.md'
  }
end

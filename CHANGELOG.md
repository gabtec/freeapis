# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.5] - 2022-06-17

### Updated

- Update "GET /v1/calendario/feriados/:ano" output to show hollidays sorted by date
- Add "GET /v1/docs" endpoint

## [1.0.4] - 2022-06-09

### Added

- Add "GET /v1/portugal/concelhos?distrito=nome"
- Add "GET /v1/portugal/concelhos/:cod"
- Add utils.ensureUpperFirst()

## [1.0.3] - 2022-06-09

### Added

- Add "GET /v1/portugal/distritos/"
- Add "GET /v1/portugal/distritos?listar=nome|cod|abrev"
- Add "GET /v1/portugal/distritos/:id"

### Fixed

- Holidays year validation

## [1.0.2] - 2022-06-06

### Added

- Add "GET /v1/calendario/feriados/:ano"

## [1.0.1] - 2022-06-06

### Fixed

- Fixed dockerfile

## [1.0.0] - 2022-06-06

### Added

- Add "GET /v1/calendario/bissexto/:ano"
- First release

[unreleased]: https://github.com/gabtec/freeapis/compare/v1.0.0...HEAD
[1.0.3]: https://github.com/gabtec/freeapis/releases/tag/v1.0.3
[1.0.2]: https://github.com/gabtec/freeapis/releases/tag/v1.0.2
[1.0.1]: https://github.com/gabtec/freeapis/releases/tag/v1.0.1

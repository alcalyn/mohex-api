# Mohex API

Rest API to calculate Hex moves using Mohex AI.

Mohex binary source from <https://github.com/cgao3/benzene-vanilla-cmake>.

## Develop

Install project with:

``` bash
make install
```

Start project with:

``` bash
make
```

Mohex API is available at <http://localhost:3000>.

## API

- Calculate next move:

```
POST /api/calculate-move

{
    "size": 11,
    "movesHistory": "d5 c7",
    "currentColor": "white"
}

---
# Response:

b9
```

- Get license:

```
GET /api/license

---
# Response:

MoHex 2.0.CMake Oct 26 2023
Copyright (C) 2007-2010 by the authors of the Benzene project.
See http://benzene.sourceforge.net for information about benzene.
Benzene comes with NO WARRANTY to the extent permitted by law.
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public License
as published by the Free Software Foundation - version 3. For more
information about these matters, see the files COPYING and COPYING.LESSER.
```

# random-quest

# Project Overview

## Project Name

Random Quest

## Project Description

MVP functionality will have the user create a character several traits, including character art that they can later see details on. Post MVP, the user will control any created character in a game that takes the user generated character information and "battles" random information from the app. The character is deleted upon defeat.

## Wireframes

**Mvp**
![image](https://user-images.githubusercontent.com/9029262/144320365-64b19f06-34a5-4c38-8a64-4bcf2ec38eaf.png)
![image](https://user-images.githubusercontent.com/9029262/144321085-1971a514-878d-4f44-b16f-e1b89a52686a.png)
![image](https://user-images.githubusercontent.com/9029262/144320520-b131ccae-7b8f-4212-aa30-dc897a5326ee.png)

**Post-MVP**
![image](https://user-images.githubusercontent.com/9029262/144320868-0ec7f568-5ae6-4c0d-949e-9e0e73c28268.png)

## Component Hierarchy

![image](https://user-images.githubusercontent.com/9029262/144319995-c36ab49e-94b4-407b-8509-a2cbaea68b83.png)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This **must** be properly formatted. An example is below:

```j{
    "records": [
        {
            "id": "rec9DqyH87HbLyNHI",
            "fields": {},
            "createdTime": "2021-12-01T21:08:20.000Z"
        },
        {
            "id": "recUCbQI10Lb4al22",
            "fields": {
                "name": "Dingus",
                "attack": "Attacky",
                "defense": "defendy",
                "description": "he strong",
                "image": "https://picsum.photos/200/300"
            },
            "createdTime": "2021-12-01T21:08:20.000Z"
        },
        {
            "id": "rechtLeNdECrXpnHw",
            "fields": {},
            "createdTime": "2021-12-01T21:08:20.000Z"
        }
    ]
}
```

### MVP/PostMVP

#### MVP

- Working AirTable
- Character Creation
- Character Detail Page
- Character List
- Stylish

#### PostMVP

- Add Random Game
- Add Delete Character
- Outside API use

## Project Schedule

| Day     | Deliverable                                        | Status     |
| ------- | -------------------------------------------------- | ---------- |
| Dec 1   | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| Dec 2   | Project Approval/Structure                         | Complete   |
| Dec 3   | Core Application Structure                         | Complete   |
| Dec 4-5 | MVP                                                | Complete   |
| Dec 6   | Structured Game                                    | Complete   |
| Dec 7   | Post MVP                                           | Complete   |
| Dec 8   | Presentations                                      | Incomplete |

## Timeframes

**MVP**

| Step                       | Estimated Time | Actual Time |
| -------------------------- | :------------: | :---------: |
| Create Home                |       3        |      1      |
| Create Header              |       1        |     .5      |
| Create Footer              |       1        |     .5      |
| Create Help                |       1        |     .5      |
| Style Base                 |       3        |      2      |
| Create List (get request)  |       3        |      2      |
| Create Character Card      |       3        |      1      |
| Style C.Card               |       1        |      1      |
| Address Routing            |       3        |      1      |
| Style List                 |       3        |      1      |
| Create Details             |       3        |      1      |
| Style Details              |       3        |      1      |
| Create Form (post request) |       3        |      1      |
| Handle Images              |       2        |      2      |
| Style Form                 |       3        |      2      |
| Address Routing            |       3        |      3      |
| Clean Up/MVP Complete      |       1        |      0      |
| Total                      |     40hrs      |   20.5hrs   |

**Post MVP**

| Step                          | Estimated Time | Actual time |
| ----------------------------- | :------------: | :---------: |
| Design Level Component        |       3        |      2      |
| Modify AirTable               |       3        |      1      |
| Basic Style Level             |       2        |      0      |
| Display/Design battle Card    |       3        |      1      |
| Display/Design enemy card     |       3        |      3      |
| Style cards                   |       3        |      3      |
| JS for random                 |       3        |      2      |
| JS for selection              |       3        |      3      |
| JS for comparison             |       3        |      2      |
| JS for level/scaler           |       3        |      2      |
| JS for Victory                |       1        |      1      |
| JS for defeat(delete request) |       3        |      1      |
| Address Routing               |       3        |      1      |
| CSS Finish                    |       3        |      3      |
| Total                         |     39hrs      |    25hrs    |

## SWOT Analysis

### Strengths:

Creatively solving problems.

### Weaknesses:

Designs.

### Opportunities:

Learn to use CSS Libraries.

### Threats:

Overly complex post mvp

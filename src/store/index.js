import {createStore} from 'vuex'
import {localStoragePlugin} from '../plugins/localStoragePlugin'

// function updateLocalStorage(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart))
// }

const store = createStore({
    modules: {
      //
    },
    state() {
      return {
        products: [
            {
                "id": 1,
                "name": "Eum sunt quam ut et.",
                "description": "Sint omnis ea aut aut. Expedita eum minus qui nesciunt et. Non ipsam quia est vitae autem qui.",
                "ean": "2394327262752",
                "upc": "724522407822",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Sunt qui accusantium omnis.",
                        "description": "Quam quis praesentium quis. Omnis natus libero aperiam iusto et perspiciatis placeat. Rem ab ea enim nam.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Sit error rerum qui.",
                        "description": "Repellendus nihil molestiae officia qui. Quisquam mollitia quas dolor nesciunt cum. Accusamus quos molestias unde facilis qui ut at.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Aut et consectetur sunt ut.",
                        "description": "Omnis qui exercitationem consequatur eum quia totam id maiores. Laudantium voluptatem assumenda qui impedit laudantium alias. Rerum unde voluptate ut sit quis. Quod sint atque cupiditate occaecati.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 35.35,
                "taxes": 22,
                "price": "43.13",
                "categories": [
                    7,
                    4,
                    2
                ],
                "tags": [
                    "quos"
                ]
            },
            {
                "id": 2,
                "name": "Et quas at dolor.",
                "description": "Dolorum natus eum iste sint. Quaerat dolor necessitatibus perspiciatis ducimus ut voluptas velit. Quidem illo distinctio magni molestiae sit. Aliquid ipsa laudantium dignissimos.",
                "ean": "4408099448905",
                "upc": "628211261319",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Et vel nemo laborum neque.",
                        "description": "Quis debitis cupiditate sapiente aut sit quos. Nam eos qui error odio aperiam quia. Rerum eligendi laborum perspiciatis sit rerum labore doloremque. Aperiam et sed dignissimos nihil eum in maxime.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Nihil fuga natus soluta quas.",
                        "description": "Omnis et omnis corporis facere et. Harum ab quibusdam sint inventore autem voluptatibus fugiat. Error id sint id. Earum dolor atque aliquam minima totam cum.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Perspiciatis omnis quae est.",
                        "description": "Velit repellat aliquam libero. Eos commodi ea sequi dolores sapiente. In cupiditate architecto porro facilis maiores quae ut nisi. Libero voluptas cupiditate quo voluptatum ex ut est.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 3496.25,
                "taxes": 22,
                "price": "4265.43",
                "categories": [
                    3,
                    8,
                    5,
                    1,
                    9,
                    6,
                    4
                ],
                "tags": [
                    "molestias",
                    "rerum"
                ]
            },
            {
                "id": 3,
                "name": "Ea ut animi neque.",
                "description": "Culpa quo nulla et omnis. Nihil nulla dicta sunt consequatur dolorum vel culpa. Ad qui nihil laborum sint qui labore aut est.",
                "ean": "3931032821790",
                "upc": "708033945346",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Ut mollitia et quae illum.",
                        "description": "Aut est itaque quisquam eius. Possimus quasi et et est eligendi voluptatem sint. Voluptas nesciunt et in ut nam eius.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Quod quis esse sequi libero.",
                        "description": "Omnis vel nam sed odit ut. Voluptas dicta quidem quia enim. Id odio sed consequuntur unde.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Dolor ut ut impedit ipsa vel.",
                        "description": "Odit fuga voluptatem rerum aspernatur. Voluptas ipsa consequatur eveniet minus. Sint rerum sit qui quam fugiat fugiat.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 327576.15,
                "taxes": 22,
                "price": "399642.90",
                "categories": [
                    9,
                    1,
                    8
                ],
                "tags": [
                    "sit",
                    "unde",
                    "autem",
                    "et",
                    "aut",
                    "repellat",
                    "autem"
                ]
            },
            {
                "id": 4,
                "name": "Rerum ex sed et et.",
                "description": "Eum reiciendis dicta esse architecto rerum. Commodi et tempore iusto a quis consequuntur. Illo ipsa qui qui sit.",
                "ean": "5828029191050",
                "upc": "931112193221",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Ratione ex alias rerum saepe.",
                        "description": "Delectus est consequatur assumenda debitis quas eum. Autem non ipsa et consequatur ut. Repudiandae aliquid tenetur quia temporibus fugiat sint. Et aliquid sed quis libero corrupti.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Dolore et ut ut esse quaerat.",
                        "description": "Doloremque quam animi corrupti ipsam qui aliquam. Tenetur consequuntur maxime rerum sapiente accusantium. Sed aspernatur occaecati nostrum.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Autem sunt nostrum ut non.",
                        "description": "Placeat dolorem nisi ut et quia commodi quas. Nemo dolor harum ad et quo. Aut sapiente quibusdam quidem eius magnam unde sapiente amet. Similique nulla aut esse fugiat accusantium cumque aut.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 1640441.21,
                "taxes": 22,
                "price": "2001338.28",
                "categories": [
                    1,
                    6,
                    3,
                    4,
                    7,
                    2
                ],
                "tags": [
                    "debitis",
                    "sit"
                ]
            },
            {
                "id": 5,
                "name": "Ut et quia ad in.",
                "description": "Odio harum sit totam. Ut ut libero ab non. Ipsum praesentium provident voluptas id sed et.",
                "ean": "6065487778068",
                "upc": "948655202216",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Ut provident id beatae ab.",
                        "description": "Ab quis fuga velit quidem est reiciendis. Quas laudantium odio aspernatur consequuntur. Esse nulla quia laudantium temporibus.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Quia sint dolore corporis.",
                        "description": "Quod sit distinctio voluptate consequatur libero quibusdam. Ipsa facilis quisquam repudiandae in incidunt rerum enim consequatur. Nemo id itaque laudantium architecto autem rerum ea vitae.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Ipsam ipsa quos inventore id.",
                        "description": "Quibusdam similique tempora ducimus illum consequuntur in fugit perferendis. Mollitia natus et quos illum.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 288023.12,
                "taxes": 22,
                "price": "351388.21",
                "categories": [
                    2,
                    7,
                    3,
                    9,
                    6
                ],
                "tags": [
                    "sint",
                    "harum",
                    "et",
                    "dolores",
                    "aut",
                    "beatae",
                    "consequatur"
                ]
            },
            {
                "id": 6,
                "name": "Quas eos quod in facilis.",
                "description": "Pariatur suscipit repudiandae rerum nulla. Iusto est facilis vel voluptatem consectetur incidunt. Aspernatur laborum et impedit aut. Sunt repellat accusamus sit voluptatem explicabo enim tempore.",
                "ean": "7488096737070",
                "upc": "112565651510",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Quibusdam ducimus ea eaque.",
                        "description": "Repudiandae provident quas illum quis quaerat enim aliquam reprehenderit. Illum reiciendis temporibus expedita. Adipisci qui ipsa neque.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Et adipisci illo ducimus sed.",
                        "description": "Dicta voluptas dicta quis qui. Aut possimus aut veritatis. Vero consectetur voluptatem distinctio dicta sed quidem minus. Laboriosam fugiat eum nihil incidunt blanditiis sed.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "At est aut earum rerum sit.",
                        "description": "Eum molestiae eaque dolorem delectus. Voluptas pariatur optio in harum earum. Quibusdam pariatur sed exercitationem qui.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 35625.45,
                "taxes": 22,
                "price": "43463.05",
                "categories": [
                    5,
                    1,
                    9,
                    3,
                    4
                ],
                "tags": [
                    "placeat"
                ]
            },
            {
                "id": 7,
                "name": "Et vel vitae nobis aut.",
                "description": "Id officiis labore voluptatum commodi enim. Alias ut nobis ut. Eius ut ex natus qui quae optio assumenda eligendi.",
                "ean": "3255640428678",
                "upc": "493755399288",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Maxime voluptas eaque harum.",
                        "description": "Ut quo tenetur quod quasi quod minima modi qui. Maxime et reiciendis sequi magnam labore aut repudiandae. Animi architecto illo sit.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Quo dolores beatae vero.",
                        "description": "Inventore reprehenderit accusamus autem vel animi minus recusandae. Voluptas dolorem incidunt quo culpa explicabo consequatur iusto. Soluta voluptas adipisci animi quia odit et aut.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Et id autem error natus.",
                        "description": "Officia aut quidem dolorum sit sit. Consequuntur et impedit saepe provident. Impedit vero ea itaque laborum odio velit ut.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 33.24,
                "taxes": 22,
                "price": "40.55",
                "categories": [
                    2,
                    6
                ],
                "tags": [
                    "placeat",
                    "illo",
                    "ut",
                    "est",
                    "ea",
                    "rerum",
                    "atque",
                    "est",
                    "ipsa"
                ]
            },
            {
                "id": 8,
                "name": "Qui quae ut ea et.",
                "description": "Et odio tempore ab vero. Nemo impedit aliquid veritatis repudiandae. Ut molestias distinctio laudantium pariatur deserunt. Sunt est sed id distinctio officiis ut quo reiciendis.",
                "ean": "4114541739209",
                "upc": "124240964837",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Et iusto rem officia dolores.",
                        "description": "Ut id et vel aut quis ea. Quia omnis quae fuga nisi. Necessitatibus quaerat fugit ut ullam. Animi ipsa modi et a aut aspernatur provident totam.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Aliquam omnis ut earum rerum.",
                        "description": "Est autem ipsam ipsa eligendi enim. Harum perspiciatis perferendis qui fugiat nisi. Odio aperiam aliquid aut expedita nihil cum incidunt.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Nihil quas qui ipsa.",
                        "description": "Eveniet libero quas id ut qui. Modi nulla est ut veritatis. Vero impedit pariatur et sapiente. Quia non sed enim delectus beatae quis.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 73101.58,
                "taxes": 22,
                "price": "89183.93",
                "categories": [
                    8,
                    6,
                    2,
                    7,
                    4,
                    9
                ],
                "tags": [
                    "modi",
                    "iste",
                    "ut",
                    "nesciunt"
                ]
            },
            {
                "id": 9,
                "name": "Qui commodi id sint eos.",
                "description": "Facilis ea dicta sunt voluptas consectetur. Iusto atque qui earum dolorum illo culpa tempore. Cupiditate nihil quod necessitatibus exercitationem hic pariatur et. Harum totam harum veritatis id.",
                "ean": "8185651577117",
                "upc": "354875583181",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Illo quo hic dolor accusamus.",
                        "description": "Quidem ullam dolores vitae assumenda. Accusantium eveniet ut totam eos dolor enim. Atque natus quas veniam provident fuga magnam qui.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Dolor ea aperiam ut quia.",
                        "description": "Harum dolorem aperiam et et vitae quo. Sunt sint aut dolorem nesciunt praesentium adipisci. Rerum et cum nam rem aut doloremque praesentium.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Id odio amet et qui rem.",
                        "description": "Nisi laborum recusandae molestiae dolores. Illum dolores at natus architecto voluptate quaerat qui omnis. Quia et illum nihil omnis. Odio tempore reiciendis omnis earum debitis ut.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 591138.52,
                "taxes": 22,
                "price": "721188.99",
                "categories": [
                    4,
                    3,
                    5,
                    8
                ],
                "tags": [
                    "unde",
                    "consequatur",
                    "dignissimos",
                    "necessitatibus"
                ]
            },
            {
                "id": 10,
                "name": "Et cum deserunt et.",
                "description": "Voluptas dignissimos sed rem saepe autem recusandae sint necessitatibus. Quasi nihil reiciendis unde in. Totam debitis ut sunt iste esse quasi. Quia quo cumque beatae vel est dolorem.",
                "ean": "8675722827673",
                "upc": "645198427324",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Sunt nihil ab quia sed.",
                        "description": "Non occaecati suscipit quod. Sit repudiandae ut sapiente est eveniet. Ut magni et odio.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Quia occaecati autem qui.",
                        "description": "Quo mollitia ut aut dicta. Sapiente quam et omnis similique eveniet. Et a et quos totam ab qui.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Dolore consequatur quos sed.",
                        "description": "Repudiandae vitae quidem deserunt voluptas quis autem nulla totam. Tempora sint fugiat tenetur. Suscipit numquam sequi itaque qui est et commodi non. Autem autem animi eius itaque qui.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 23.04,
                "taxes": 22,
                "price": "28.11",
                "categories": [
                    7
                ],
                "tags": [
                    "eveniet",
                    "veritatis"
                ]
            },
            {
                "id": 11,
                "name": "Sit omnis qui iste qui.",
                "description": "Dolore sint fugiat hic quas sed nihil praesentium. Totam illum aspernatur vitae quas sed non quo. Possimus reiciendis non repudiandae ipsa.",
                "ean": "6518454708242",
                "upc": "848405993447",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Autem ducimus id qui quasi.",
                        "description": "Rerum molestiae ipsum esse a atque ut natus numquam. Laboriosam quo voluptas qui laudantium praesentium. Ut adipisci est ut molestiae numquam.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Expedita rem in est.",
                        "description": "Corporis cupiditate possimus perferendis id ullam omnis. Non consequatur accusamus ut ut quidem quia eaque. Impedit recusandae vel officia sint et pariatur veniam. Illum beatae voluptatem nihil.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Aut sunt est sint ad.",
                        "description": "Autem quasi sunt est. Aut in excepturi debitis voluptatum numquam non error. Quos expedita iste dolores ratione sint.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 10543086.9,
                "taxes": 22,
                "price": "12862566.02",
                "categories": [
                    4
                ],
                "tags": [
                    "corrupti",
                    "nobis",
                    "quis",
                    "omnis",
                    "vero"
                ]
            },
            {
                "id": 12,
                "name": "Ipsa a illum consequatur.",
                "description": "Nulla vero nisi culpa odit est ex modi. Rerum est quos perspiciatis explicabo ea error.",
                "ean": "7618260559881",
                "upc": "375881765735",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Eaque non et libero aut.",
                        "description": "Iure sunt quia hic enim fuga. Ea dolorem expedita pariatur nostrum quae. Sint voluptatem quam dolore consequatur.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Qui ut est alias nihil et id.",
                        "description": "Ex assumenda sint alias. Totam et ex nihil vero. Iusto veniam nihil qui in unde illum hic. Omnis sed libero corporis enim et laborum ut.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Sint quia sed quo possimus.",
                        "description": "Ipsum maiores autem et dignissimos iste officiis ipsum earum. Error in quam sed dolorem aut dolorem dolorem. Veniam possimus et vero in. Earum itaque cum ad aperiam enim nemo.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 27.14,
                "taxes": 22,
                "price": "33.11",
                "categories": [
                    2,
                    9,
                    7,
                    4
                ],
                "tags": [
                    "odio",
                    "veritatis"
                ]
            },
            {
                "id": 13,
                "name": "Totam similique ut quia.",
                "description": "Facilis saepe ea sequi nihil. Aut eum delectus consectetur cupiditate qui. Provident modi sapiente nemo sapiente quod ipsam ea.",
                "ean": "1002929145335",
                "upc": "151987004615",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Id qui suscipit et ullam eum.",
                        "description": "Illo tempora incidunt deserunt. Vel ea et tenetur ea. Quaerat et rerum odio esse.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Placeat omnis ut ut.",
                        "description": "Doloremque quo id ipsam aliquam adipisci. Velit odio reprehenderit minima reiciendis. Odio autem illum atque blanditiis adipisci sequi. Consectetur in magni mollitia quia est id sint.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Nam et ex est nemo quia.",
                        "description": "Quasi architecto iure ea aspernatur explicabo nam enim. Nemo asperiores rerum laudantium officia iure quia ducimus in. Laboriosam qui nesciunt enim ea odio rerum quia.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 24665139.63,
                "taxes": 22,
                "price": "30091470.35",
                "categories": [
                    8,
                    4,
                    1,
                    6,
                    7,
                    5
                ],
                "tags": [
                    "quis",
                    "qui",
                    "exercitationem",
                    "voluptatem",
                    "iste",
                    "maxime",
                    "ut"
                ]
            },
            {
                "id": 14,
                "name": "Et nesciunt saepe qui quis.",
                "description": "Quasi ab eum et et eius est reprehenderit. Excepturi fugiat quis eligendi sed exercitationem. Eligendi et quaerat quia vel ut beatae eveniet.",
                "ean": "0060977872444",
                "upc": "651767171833",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Cumque consequatur in cum.",
                        "description": "Qui nihil dolor mollitia. Sequi et et nisi sunt quo voluptates esse numquam. Vero quia vel impedit fugiat velit. Similique quam quis vero dignissimos. Itaque nemo non ducimus dolor et.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Ad aut ad vero commodi.",
                        "description": "Dolor dolores accusantium ut illum dolores non recusandae occaecati. Placeat magnam quis recusandae id qui assumenda ex quis. Facilis at totam officia quo.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Veritatis tempora eos sequi.",
                        "description": "Ut magni qui omnis voluptatum maiores. Voluptas rerum id sunt dolore. Modi expedita quo cum et pariatur a. Dolor velit consequatur quibusdam sed sed.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 0.78,
                "taxes": 22,
                "price": "0.95",
                "categories": [
                    7
                ],
                "tags": [
                    "odit",
                    "nihil",
                    "soluta",
                    "quia",
                    "necessitatibus",
                    "mollitia",
                    "dignissimos",
                    "repudiandae"
                ]
            },
            {
                "id": 15,
                "name": "Ab est enim eum voluptas ut.",
                "description": "Voluptatem et consequatur architecto cum animi libero sed. Quia iste et harum accusamus. Vero voluptates quod nemo amet.",
                "ean": "3497698532697",
                "upc": "495313306914",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Dolores enim nihil quo.",
                        "description": "Est cum fuga impedit. Fugit reprehenderit veniam est adipisci. Quasi porro impedit voluptas quo. Ducimus cupiditate iusto assumenda ab quibusdam.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Est incidunt ut aut.",
                        "description": "Nulla laboriosam iure numquam. Eum voluptatem ab non. Rem accusantium quis iure quia enim non laborum enim. Voluptas quae sint minus officiis.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Voluptates repellat aut et.",
                        "description": "Molestiae repellendus doloremque ut assumenda expedita adipisci non omnis. Eum repellendus ea tenetur placeat hic ut. Perferendis explicabo praesentium sapiente impedit voluptatem.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 2673.52,
                "taxes": 22,
                "price": "3261.69",
                "categories": [
                    2,
                    6,
                    3,
                    5,
                    4
                ],
                "tags": [
                    "sit"
                ]
            },
            {
                "id": 16,
                "name": "Rerum et nihil ut aspernatur.",
                "description": "Dicta qui eveniet autem. Aperiam debitis iure architecto illum consequuntur consequatur. Rerum repudiandae beatae praesentium error est. Itaque placeat enim rem rerum.",
                "ean": "3435105573093",
                "upc": "699298196381",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Tempora ab inventore ea non.",
                        "description": "Sapiente a et expedita consequuntur corrupti. Expedita fugit dolor necessitatibus ullam consequatur omnis aut. Magni quis veritatis non et rem odio et.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Delectus ducimus quasi at at.",
                        "description": "Doloribus ipsum omnis velit illum ipsam sed. Vero assumenda earum quis est. Commodi impedit voluptatem sapiente perspiciatis earum et dolorem.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Laborum ut similique quia.",
                        "description": "Voluptatem ipsam in eligendi qui quia ea excepturi. Sapiente et vitae eius magnam quia delectus. Ea quia atque doloremque beatae voluptatem similique.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 12618.17,
                "taxes": 22,
                "price": "15394.17",
                "categories": [
                    4,
                    3,
                    2,
                    9
                ],
                "tags": [
                    "autem",
                    "sunt",
                    "voluptatem",
                    "sit",
                    "possimus",
                    "quia",
                    "sequi"
                ]
            },
            {
                "id": 17,
                "name": "Culpa quo amet iste numquam.",
                "description": "Eum reiciendis dolores voluptate sint quas perferendis. Qui quas est eligendi provident. Occaecati ipsum quasi ut recusandae rerum suscipit. Magnam et vel quas accusantium.",
                "ean": "4127804228853",
                "upc": "412690774070",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Dolores ex aut et.",
                        "description": "Nesciunt quis vel iure excepturi. Sequi debitis eum omnis. Quia odit et ducimus ad et ut voluptas. Ut voluptas et unde eveniet.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Ex quam eius dolorum.",
                        "description": "Repudiandae est impedit ipsam et et. Rem sit vel architecto sed officia. Pariatur consequuntur neque id ipsam ut.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Explicabo ea sequi ab error.",
                        "description": "Perferendis corporis minus delectus accusantium porro necessitatibus explicabo ab. Cum earum ex dolorem aut animi. Vel molestias rerum quam quo molestiae.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 3141.6,
                "taxes": 22,
                "price": "3832.75",
                "categories": [
                    6,
                    2,
                    1,
                    7,
                    4,
                    9
                ],
                "tags": [
                    "ut",
                    "et",
                    "sit",
                    "deserunt",
                    "fugit"
                ]
            },
            {
                "id": 18,
                "name": "Aut ea dolorem sunt autem.",
                "description": "Ut labore occaecati rem totam odit at. Minima asperiores fugit aliquam quae ea. Accusamus corrupti ad aut dolores. Voluptatem qui nulla aut nisi aliquid sed.",
                "ean": "6989113976331",
                "upc": "002967509696",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Id amet ex voluptatum.",
                        "description": "Ut dolorem eum doloribus in alias praesentium. Est voluptatem nemo corporis quisquam ut ex incidunt. In perferendis et suscipit mollitia voluptatum voluptatem.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Eos omnis et ut in.",
                        "description": "Aliquam sint repellendus molestiae deleniti. Id aut voluptatem ea ad aut. Reiciendis ducimus soluta qui architecto pariatur quo voluptas. Animi omnis magnam porro sit rerum sapiente autem.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Et nostrum iste est sed.",
                        "description": "Quibusdam repudiandae aut architecto perferendis enim perspiciatis laborum. Nihil inventore quis neque sed. Numquam nobis beatae ut voluptate voluptate aliquam sequi.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 30170121.85,
                "taxes": 22,
                "price": "36807548.66",
                "categories": [
                    2
                ],
                "tags": [
                    "beatae",
                    "voluptatibus",
                    "voluptas",
                    "est"
                ]
            },
            {
                "id": 19,
                "name": "Doloremque ut ducimus ex ut.",
                "description": "Quis qui voluptate recusandae exercitationem exercitationem aut. Et deserunt ad provident. Voluptate aut amet est iste assumenda voluptate deleniti.",
                "ean": "0590282635460",
                "upc": "843748866325",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Error soluta aut illo illo.",
                        "description": "Rem quam saepe mollitia suscipit. Perferendis ab qui dolor magni. Sit sed iure deserunt molestiae facere quo. Pariatur voluptas voluptas suscipit dolore.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "In quam optio fugiat nemo.",
                        "description": "Non dolor fugit molestiae quia. Voluptas itaque dolorem in et harum. Dignissimos placeat quaerat delectus ut. Beatae magni blanditiis voluptatibus dignissimos sit. Dolores sunt qui ut.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Qui aut qui nemo eum.",
                        "description": "Numquam ea amet et corporis eum amet possimus. Et alias nam vel quia. Nihil nulla in laboriosam earum. Consequuntur non dicta error ut dicta sunt.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 712.98,
                "taxes": 22,
                "price": "869.84",
                "categories": [
                    5,
                    9,
                    1,
                    4
                ],
                "tags": [
                    "et",
                    "adipisci",
                    "labore",
                    "aperiam",
                    "beatae",
                    "qui",
                    "facilis",
                    "aut"
                ]
            },
            {
                "id": 20,
                "name": "Quas facere laudantium ut.",
                "description": "Est ut accusamus sint consequatur labore. Est nesciunt repellat ipsum temporibus. Minima repellat dicta facere error sint sed voluptates.",
                "ean": "5856605786192",
                "upc": "855413386184",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Et accusamus adipisci in.",
                        "description": "Doloremque atque soluta ipsa molestiae cumque. Quia consequuntur aut enim. Rerum id est assumenda quo.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Vero ea aut distinctio.",
                        "description": "Consequatur voluptas quia qui ut repudiandae aut adipisci. Culpa aut est enim. Qui tempore rerum minus fugit. Dolor natus enim sed et commodi consequuntur.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Sed omnis fugit veniam.",
                        "description": "Eveniet sed saepe qui repellendus sed. Maxime ut deserunt natus voluptatibus. Et quia tempore repellendus qui quis ut provident.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 6644703.07,
                "taxes": 22,
                "price": "8106537.75",
                "categories": [
                    9
                ],
                "tags": [
                    "consequatur",
                    "repudiandae",
                    "est",
                    "perferendis",
                    "quis",
                    "et",
                    "quasi",
                    "quidem",
                    "recusandae",
                    "velit"
                ]
            },
            {
                "id": 21,
                "name": "Est dolores aut soluta et ut.",
                "description": "A nihil voluptatum tenetur. Id optio assumenda aperiam voluptatem adipisci. Tempore facilis non ut repellendus fugit. Voluptas neque quo dolorem labore aut sint.",
                "ean": "0129031936499",
                "upc": "229568851533",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Sit eligendi dolor esse.",
                        "description": "Qui laudantium et voluptatem. Voluptate in error dolor et quis. Repudiandae perspiciatis quisquam aut. Consequuntur dolorem sequi blanditiis ullam debitis quo.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Laudantium ipsam ut aut.",
                        "description": "Incidunt soluta magnam quisquam beatae. Non sapiente velit nesciunt aut totam.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Omnis ut aliquid sit ut.",
                        "description": "Nobis rerum tenetur neque dolor sint suscipit at. Et fugiat voluptas ab sunt quasi sunt consectetur. Vero molestias nobis et.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 20.58,
                "taxes": 22,
                "price": "25.11",
                "categories": [
                    8,
                    9,
                    1,
                    2,
                    5,
                    4
                ],
                "tags": [
                    "sunt",
                    "quidem",
                    "assumenda",
                    "qui",
                    "natus",
                    "et",
                    "assumenda",
                    "odio",
                    "nobis",
                    "temporibus"
                ]
            },
            {
                "id": 22,
                "name": "Fugiat expedita nemo sed.",
                "description": "Rerum earum et aut numquam. Labore provident consequatur corporis. Voluptatem sequi ut fugiat ipsa. Deleniti rerum et temporibus doloremque quidem omnis.",
                "ean": "2213847414314",
                "upc": "428552131210",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Ut ducimus non et.",
                        "description": "Repellendus voluptas quasi et quaerat earum fuga. Atque beatae reprehenderit quasi qui et distinctio officia. Voluptatum officiis non omnis ullam rem maxime quo.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Aut et et sit dolores vero.",
                        "description": "Aut sed at dicta reiciendis iusto quod. Aliquam voluptates porro ratione nobis ut vero. Dolores magnam quisquam provident non.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Ab alias veniam quia sunt.",
                        "description": "Sequi harum reprehenderit at. Odio ratione aliquam dolorum culpa. Non consectetur hic nam corporis commodi.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 49.65,
                "taxes": 22,
                "price": "60.57",
                "categories": [
                    6,
                    4,
                    7,
                    3,
                    8,
                    9
                ],
                "tags": [
                    "corporis",
                    "dignissimos",
                    "est",
                    "occaecati",
                    "dolores",
                    "quis",
                    "cum",
                    "dicta",
                    "repudiandae"
                ]
            },
            {
                "id": 23,
                "name": "Atque sunt qui esse quo.",
                "description": "Totam sequi rerum qui provident recusandae aut. Qui aspernatur natus sit nesciunt. Quis quaerat facilis exercitationem ipsa quis occaecati molestias. Aut voluptatem cum quas non architecto ipsam.",
                "ean": "5903445575766",
                "upc": "422572209332",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Et et sit culpa.",
                        "description": "Error et mollitia consequatur et maiores. Cupiditate qui voluptas sed esse exercitationem dicta voluptatem. Ea et id aut architecto velit rerum sequi.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Vel itaque facere aut.",
                        "description": "Quia est non est non et amet omnis. Id quod quia est dolore numquam sequi. Eius temporibus qui nisi et quam. Delectus cum et qui fugiat doloremque non nesciunt mollitia.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Alias enim aut quia est.",
                        "description": "Nisi in nobis maiores esse placeat. Corporis ut et aut.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 181064232.41,
                "taxes": 22,
                "price": "220898363.54",
                "categories": [
                    7,
                    5,
                    1,
                    8,
                    2
                ],
                "tags": [
                    "labore",
                    "deleniti",
                    "tenetur"
                ]
            },
            {
                "id": 24,
                "name": "Eius vero dolor voluptas et.",
                "description": "Dolor autem officia ab ipsam et. Ullam pariatur ex tempore sed eligendi. Reiciendis ut qui omnis illo soluta nam ex recusandae.",
                "ean": "9378327895823",
                "upc": "300031026088",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Earum et quo dolorem ipsam.",
                        "description": "Ut quis eum perspiciatis fuga voluptatum. Voluptatem et vel autem nulla. Minima consequuntur consectetur sequi quo. Deserunt animi et quia et.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Architecto ullam quo natus.",
                        "description": "Quidem fugit illum nobis cupiditate. Est sunt delectus tempore velit. Voluptatem laboriosam aperiam voluptas autem fuga tenetur molestiae. Pariatur eos a nobis. Atque qui possimus dicta.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Qui ut modi voluptates vel.",
                        "description": "Qui nihil aut error. Nihil non quisquam ut asperiores officia. Modi ipsa dolore quis corporis inventore asperiores.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 416.02,
                "taxes": 22,
                "price": "507.54",
                "categories": [
                    8,
                    9,
                    6,
                    3
                ],
                "tags": [
                    "tenetur",
                    "placeat",
                    "dignissimos",
                    "nemo",
                    "dolores",
                    "sit",
                    "animi",
                    "quia",
                    "mollitia",
                    "rem"
                ]
            },
            {
                "id": 25,
                "name": "Minus neque molestiae alias.",
                "description": "Inventore ipsa excepturi qui id quo. Mollitia repellat placeat ut voluptas. Sint ex placeat eum minus voluptas sed. Sed ab minus qui cumque soluta.",
                "ean": "2435479022457",
                "upc": "080173136434",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Qui et delectus error.",
                        "description": "Distinctio vel et voluptas. Aut maiores voluptatem et pariatur sint eaque in. Fugit enim laboriosam provident sunt soluta ut.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Est odit adipisci est et.",
                        "description": "Voluptates quibusdam nostrum molestiae dolore recusandae. Velit minima pariatur tempore vel non corporis porro. Temporibus numquam quam eligendi. Beatae hic qui id ut consectetur perspiciatis earum.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Deserunt odit iusto et.",
                        "description": "Et voluptatem molestias libero quibusdam dolorem. Alias sed quod rerum molestias officiis fuga quis. Dolores et rerum libero quos fugit.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 11847.89,
                "taxes": 22,
                "price": "14454.43",
                "categories": [
                    4,
                    1,
                    2,
                    8,
                    6,
                    5
                ],
                "tags": [
                    "quasi",
                    "laborum",
                    "quo",
                    "aut",
                    "iste",
                    "quidem",
                    "repudiandae"
                ]
            },
            {
                "id": 26,
                "name": "Et placeat qui magni qui.",
                "description": "Voluptates accusamus labore consequuntur velit molestiae adipisci et ducimus. Pariatur at nobis aliquid voluptatem qui inventore nihil. Accusamus quod et laborum exercitationem eligendi magni et.",
                "ean": "9782436792216",
                "upc": "859573032649",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Et ut esse et aut.",
                        "description": "Doloribus molestiae ratione mollitia odio ratione dolorem veritatis nihil. Eligendi atque quibusdam sit quia repellendus aut. Quo enim culpa rerum ipsum officiis. Iure ut blanditiis illum.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Quaerat nisi sunt quia fuga.",
                        "description": "Tempore error et quibusdam et repudiandae harum. Et voluptatem exercitationem est. Qui tempore aspernatur commodi.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Qui quia ipsa veniam.",
                        "description": "Qui aut harum magnam aut. Et quia consectetur ut exercitationem nulla enim vel. Illo eos eum tenetur. Doloremque laborum labore explicabo nulla. Molestias totam et ad.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 43919272.39,
                "taxes": 22,
                "price": "53581512.32",
                "categories": [
                    6,
                    3,
                    1,
                    2,
                    8
                ],
                "tags": [
                    "sit",
                    "qui",
                    "sed",
                    "consequatur",
                    "in",
                    "esse"
                ]
            },
            {
                "id": 27,
                "name": "Voluptate ut sed in neque.",
                "description": "Doloremque dicta ipsa animi corporis. Veniam nihil et illum id cumque. Labore quos ducimus est nemo consequatur itaque. Quae aut eos quia ratione sint.",
                "ean": "3876295413361",
                "upc": "626154090315",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Quia rerum et quaerat et.",
                        "description": "Deserunt fugit porro delectus adipisci odio maxime quia. Nihil enim ullam ut id voluptas. Consequuntur nulla ipsa minima soluta ipsa ducimus.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Asperiores rerum non saepe.",
                        "description": "Accusamus eius consequatur nobis facere architecto. Doloribus est harum voluptatem rerum consequatur a quia. Beatae laborum quisquam sed modi harum.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Ut voluptates et non.",
                        "description": "Dolores beatae repellendus ea. Quidem voluptatem ea est in nihil eos et. Incidunt veniam aliquid repellendus autem.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 0.01,
                "taxes": 22,
                "price": "0.01",
                "categories": [
                    4
                ],
                "tags": [
                    "maxime",
                    "facere",
                    "voluptas"
                ]
            },
            {
                "id": 28,
                "name": "Aliquam voluptas officia est.",
                "description": "Est est esse et nihil. Architecto id dolore quo et necessitatibus doloremque. Ad officiis quod ea deserunt.",
                "ean": "7145504138286",
                "upc": "073046319413",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Laborum rerum at fugit sunt.",
                        "description": "Suscipit cupiditate est porro qui asperiores voluptas et. Itaque fuga facere vero necessitatibus ut veritatis et. Iusto consequatur rerum et nam.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Quia vitae quis animi aut.",
                        "description": "Aliquid eos ut officiis quis vero aut. Rerum ullam ut iusto et esse ratione. Unde placeat ipsa tempore voluptatem omnis beatae.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Ad veniam porro provident.",
                        "description": "Rerum maxime magni optio qui sunt dicta autem. Et illum eius blanditiis qui iste. Numquam est quas voluptas. Nesciunt dolorem sapiente facilis et.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 3782124.06,
                "taxes": 22,
                "price": "4614191.35",
                "categories": [
                    1,
                    6,
                    8,
                    4,
                    5,
                    3,
                    7
                ],
                "tags": [
                    "quam",
                    "nisi"
                ]
            },
            {
                "id": 29,
                "name": "Minus porro perspiciatis id.",
                "description": "Velit ipsam repellat eum ea et eos. Perferendis quaerat quos amet iste aliquid. Debitis sint cum perspiciatis esse temporibus quasi. Eos ut dolores vero.",
                "ean": "3514127896165",
                "upc": "097048365493",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Omnis delectus aut ut optio.",
                        "description": "Amet nobis ducimus quia vitae consectetur. Quo odit officiis sunt odio et dignissimos eveniet. Temporibus et sit voluptas eveniet. Soluta quod nisi sapiente et odio et.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Tenetur aut in tempore omnis.",
                        "description": "Dolorem et explicabo et illo. Excepturi voluptas omnis in laborum voluptas provident.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Id autem qui molestias aut.",
                        "description": "Eos odio quia labore ut. Quae culpa velit tenetur est. Omnis velit molestiae placeat. Voluptas quas illum rerum enim. Nemo neque ut rerum assumenda voluptas.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 13293704.38,
                "taxes": 22,
                "price": "16218319.34",
                "categories": [
                    9,
                    1,
                    4,
                    3
                ],
                "tags": [
                    "nobis",
                    "eligendi",
                    "quia",
                    "sed"
                ]
            },
            {
                "id": 30,
                "name": "Quos in eum est iusto amet.",
                "description": "Dolor debitis quis et dolores quis labore dolor. Adipisci explicabo magnam molestiae qui. Assumenda odio tempore sit magni. Consequuntur quia et voluptate cupiditate iste iusto.",
                "ean": "9407636232767",
                "upc": "693862587780",
                "image": "http://placeimg.com/640/480/tech",
                "images": [
                    {
                        "title": "Unde sed eius omnis.",
                        "description": "Aut et quasi quasi quibusdam est vel illum earum. Excepturi aspernatur eum id omnis ut. Dignissimos sit amet ut rem.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Autem amet velit magnam.",
                        "description": "Corporis molestiae consequatur non temporibus. Quod autem dolorum et. Dolorem odio dolorum natus.",
                        "url": "http://placeimg.com/640/480/any"
                    },
                    {
                        "title": "Cum culpa quae et iusto.",
                        "description": "Ab quidem qui commodi commodi aut mollitia magnam. Architecto nemo cum illum soluta. Ea enim omnis quam enim.",
                        "url": "http://placeimg.com/640/480/any"
                    }
                ],
                "net_price": 148266198.78,
                "taxes": 22,
                "price": "180884762.51",
                "categories": [
                    5,
                    3,
                    2,
                    1,
                    7
                ],
                "tags": [
                    "aut",
                    "libero",
                    "vel",
                    "ipsum",
                    "commodi",
                    "nostrum",
                    "in",
                    "quo"
                ]
            }
        ],
        cart: []
      }
    },
    getters: {
        productQuantity: state => product => {
            //find() returns the value of the first element in the provided array that satisfies the provided testing function
            const item = state.cart.find(x => x.id === product.id)
            if (item) return item.quantity
            else return null
        },
        cartItems: state => {
            return state.cart
        },
        cartTotalCost: state => {
            let result = 0
            state.cart.forEach(item => {
                result += item.price * item.quantity
            });
            return result
        }
    },
    mutations: {
        addToCart(state, payload) {
            //find() returns the value of the first element in the provided array that satisfies the provided testing function
            const item = state.cart.find(x => x.id === payload.id)
            if (item) item.quantity++
            else state.cart.push({...payload, quantity:1})
            // updateLocalStorage(state.cart)
        },
        removeFromCart(state, product) {
            const item = state.cart.find(x => x.id === product.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
        }
    },

    actions: {
        //
    },
    plugins: [
      localStoragePlugin
    ],
})

export default store;

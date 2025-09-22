// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        EN: {
            /* nav */
            nav_home: "Home",
            nav_residence: "Residence",
            nav_destinations: "Destinations",
            nav_activities: "Activities",
            nav_fotos: "Fotos",
            nav_join: "Join",

            /* home slides */
            home1_title: "Feel · Breath · Enjoy",
            home1_text: `Close your eyes. Open your heart. Take a deep breath.
What do you feel? A gentle touch of the breeze… Do you hear the silence? Not only around you — but within. The quiet hush beyond the city, beyond endless thoughts.
And now — listen. The soft chirping of birds. The scent of wild herbs in the air. A deep sense of calm. Life's rush stays far behind. You feel how your body lets go, how your mind softens — filling with strength and energy, gifted by nature itself.

Just 155 kilometers from Athens and 17 kilometers from Fterolaka of Mount Parnassos, is the most picturesque village in the area — Tithorea. Near the village of Tithorea, in the valley of the Boeotian Kifissos, since 1911, on an area of 120 acres, our cozy eco farm family hotel “Terra Nova” has taken root.`,

            home2_title: "About us",
            home2_text: `We are a warm family team: mom, dad, grandma, grandpa and two kids — a 9-year-old boy and a 2-year-old girl. Together we created a cozy eco-farm, where everything is filled with life, care and simple joys.

Our farm is a place where you can relax your soul: wake up to the chirping of birds, feed goats and chickens, or just drink tea under a tree. We welcome guests with children of any age and those who travel with animals — we have enough space for both play and peace. We invite you to visit, live and feel at home. It's easy to slow down here and remember how beautiful simple things can be.`,

            home3_title: "Tithorea",
            home3_text: `Tithorea is the center of the E-65 trail, next to the famous Kahalas gorge, where the visitor has the opportunity to admire the old watermill "Ekklisia to Mylos", through a magical route with many caves and rocks in various shapes.
Entering the village, on the left, there are remains of a wall from Hellenistic times that protected the settlement. In ancient times, Tithorea was one of the most important cities of Phocis with traces of habitation since 2000 BC. Its ancient wall from the 4th century BC and its Castle, its privileged geographical position, made it the most powerful center of the ancient era.
The city was destroyed twice and after its third reconstruction it acquired the beautiful walls and the name Tithorea. Look for the small chapel of Agios Ioannis Theologos. It has old frescoes but the highlight is the early Christian mosaics from the 3rd century BC. You will see them under the illuminated glass floor.
Due to the simultaneous roughness and sweetness of its terrain, Odysseus Androutsos set up his headquarters here, in his famous cave, which the locals call the Black Hole. It takes an hour and a half to hike there.
Androutsos settled here with his mother, his wife Eleni, his sister, captains, a guard and the English philhellene Trelawney who also brought small cannons from England. How did they all fit in? Before settling in, Androutsos had craftsmen shape the cave, which had two bays, in order to make living comfortable. It was Androutsos' base from 1822 to 1825. Many treasure hunters passed through the Cave of Dysseas, as the residents of Tithorea called it. Legends about hidden treasures by Androutsos still surround it.`,

            /* residence */
            res1_title: "Residence",
            res1_text: "Welcome to an elegant room where natural simplicity meets comfort and inspiration. Interior details emphasize the concept of eco-design and comfort, and a spacious window opens up to a view of nature. In our complex you will find apartments with stone finishing, a bathroom and a balcony, which can accommodate from 2 to 6 people.",
            res2_title: "Rooms",
            res2_text: "Two neat single beds with crisp white linens are located opposite wide glass doors, which open up to magnificent views of Mount Parnassos. We also have rooms for larger families. The largest have up to 4 single beds. If necessary, we can provide cots for children.",
            res3_title: "Bath",
            res3_text: "The bathroom is designed in a natural style: The ceiling with wooden beams, walls made of natural stone, a stylish cabinet with two round sinks and soft lighting create an atmosphere of privacy and comfort. The room has everything for your comfortable stay: all essential items, thoughtful details and a cozy atmosphere.",
            res4_title: "Nutrition",
            res4_text: "A special pleasure is traditional Greek home cooking, prepared with love from local products: fresh vegetables, aromatic herbs, olive oil, feta cheese, pies and dishes, the recipes of which are carefully passed down from generation to generation. Dinner with a view of the mountains turns into a real ritual of taste and comfort.",

            /* destinations */
            dest1_title: "Parnassos",
            dest1_text: "The oldest historical mention of Tithorea is made by Herodotus, who, describing Xerxes' march towards Athens after the Battle of Thermopylae in 480 BC, writes that the Persian soldiers burned the cities of the Cephissus valley.",
            dest2_title: "Parnassos Ski Center",
            dest2_text: `The center has 19 slopes, 7 ski routes, 2 main communication corridors with the lower stations, 8 connecting paths and 3 mini beginner slopes with baby lifts, with a total length of 36 Km. The descents start from 2260m and reach up to 1640m altitude with their individual length ranging from 300m to 4Km, in all degrees of difficulty and for all levels of ability.

For lovers of adventure and fun there are several off-piste “black” routes with really deep snow and lots of adrenaline as well as 2 Fun parks in Kellaria and Fterolaka. Four of our slopes — No. 6 Iniochos, No. 8 Heracles, No. 9 Odysseas & No. 2 Bacchus — are certified by the International Ski Federation for the organization of international ski competitions.`,
            dest3_title: "Popular activities on Parnassos",
            dest3_text: `Hiking — Exploring the mythical mountain of Apollo: sceneries that take your breath away. Alpine sceneries with a view to the sea, endless fir forests, ancient monuments and the oldest National Park in Greece. With over 100 km of marked paths, Mount Parnassos offers you the opportunity to discover it from one edge to the other by hiking. E4 European long distance path. Among Delphi's hiking highlights is the part of E4 European long distance path, which connects Delphi with the alpine village of Eptalofos (Agoriani). The route passes through dense fir forests, crossing the core of the Parnassos National Park. The path is part of the ancient path that connected Delphi with ancient Lilaia and northern Greece.

Ski Mountaineering — Parnassos is one of the most popular mountains for ski mountaineering in Greece. The great area of the mountain and the Alpine field also contribute to this, as well as the great snow cover that lasts for many months, the famous and big routes, while the existence of the Ski Resort is also considered important as it makes it easier for many people to have access to the area of the ski mountaineering.

Climbing — Being one of the greatest mountains in Greece, Parnassos couldn't fail to have climbing fields. Here, there are some of the most known climbing fields in the country, such as the one of Kouvelos.`,

            /* activities */
            act1_front: "Yoga in the olive garden",
            act1_title: "Yoga in the olive garden",
            act1_p1: "• Morning practices with views of mountains and green fields",
            act1_p2: "• Gentle yoga for beginners",
            act1_p3: "• Pilates to strengthen muscles and improve posture",
            act1_p4: "• A calm atmosphere filled with the natural energy of the surrounding landscape",

            act2_front: "Olive Oil Workshop",
            act2_title: "Olive Oil Workshop",
            act2_p1: "• Learn how to hand-pick olives the traditional way",
            act2_p2: "• Discover how we sort and select the fruits for pressing",
            act2_p3: "• Follow the entire journey from fresh olives to pure, cold-pressed olive oil",
            act2_p4: "• Enjoy a delicious tasting of our fresh handmade oil",

            act3_front: "Contact farm zoo",
            act3_title: "Contact farm zoo",
            act3_p1: "As you explore our farm, you'll meet a variety of friendly animals that are sure to delight you — from our adorable sheep and playful goats to affectionate cats and loyal dogs. You'll also meet some cute chickens. Every encounter promises a moment of joy and connection with nature! You can pet and feed our animals.",

            /* join form + modal */
            join_title: "Book a room",
            form_name: "Name*",
            form_email: "Email*",
            form_subject: "Subject*",
            form_message: "Message*",
            form_join: "Join Now",
            modal_title: "Message Sent!",
            modal_text: "Thank you for contacting Terra Nova. We will reply as soon as possible.",
            modal_close: "Close",

            /* footer */
            footer_quick: "Quick Links",
            foot_home: "Home",
            foot_residence: "Residence",
            foot_destinations: "Destinations",
            foot_activities: "Activities",
            footer_contact: "Contact",
            footer_email: "Email: info@terranova.com",
            footer_phone: "Phone: +30 123 456 789",
            footer_follow: "Follow Us",
            copyright: "© 2025 Terra Nova. All Rights Reserved."
        },

        GR: {
            /* nav */
            nav_home: "Αρχική",
            nav_residence: "Διαμονή",
            nav_destinations: "Προορισμοί",
            nav_activities: "Δραστηριότητες",
            nav_fotos: "Φωτογραφίες",
            nav_join: "Συμμετοχή",

            /* home slides */
            home1_title: "Νιώσε · Ανάπνευσε · Απόλαυσε",
            home1_text: `Κλείσε τα μάτια σου. Άνοιξε την καρδιά σου. Πάρε μια βαθιά ανάσα.
Τι νιώθεις; Μια απαλή ανάσα του αέρα… Ακούς τη σιωπή; Όχι μόνο γύρω σου — αλλά και μέσα σου. Η ήρεμη γαλήνη πέρα από την πόλη, πέρα από τις ατέλειωτες σκέψεις.
Και τώρα — άκου. Το απαλό κеλάηδημα των πουλιών. Το άρωμα των αγριόχορτων στον αέρα. Ένα βαθύ συναίσθημα γαλήνης. Ο ρυθμός της ζωής μένει μακριά. Νιώθεις πώς το σώμα χαλαρώνει, ο νους μαλακώνει — γеμίζοντας δύναμη και ενέργεια, δώρο της ίδιας της φύσης.

Μόλις 155 χιλιόμετρα από την Αθήνα και 17 χιλιόμετρα από τη Φτερόλακα του Πарνασσού, βρίσκεται το πιο γραφικό χωριό της περιοχής — η Τιθορέα. Κοντά στο χωριό, στην κοιλάδα του Βοιωτικού Κηφισού, από το 1911, σε έκταση 120 στρεμμάτων, έχει ριζώσει το ζεστό μας οικογενειακό αгρόκτημα-ξενοδοχείο “Terra Nova”.`,

            home2_title: "Ποιοι είμαστε",
            home2_text: `Είμαστε μια ζεστή οικογενειακή ομάδα: μαμά, μπαμπάς, γιαγιά, παππούς και δύο παιδιά — ένα αγόρι 9 ετών και ένα κορίτσι 2 ετών. Μαζί δημιουργήσαμε ένα φιλόξενο οικολογικό αгρόκτημα, όπου όλα είναι γεμάτα ζωή, φροντίδα και απλές χαρές.

Το αγρόκτημά μας είναι ένας τόπος όπου ξεκουράζεται η ψυχή: ξυπνάς με το τραγούδι των πουλιών, ταΐζεις κατσίκες και κότες ή απλώς πίνεις τσάι κάτω από ένα δέντρο. Υποδεχόμαστε επισκέπτες με παιδιά κάθε ηλικίας και όσους ταξιδεύουν με ζώα — έχουμε αρκετό χώρο τόσο για παιχνίδι όσο και για ηρεμία. Σаς προσκαλούμε να μας επισκεφθείτε, να μείνετε και να νιώσετε σαν στο σπίτι σας. Εδώ είναι εύκολο να κόψεις ρυθμούς και να θυμηθείς πόσο όμορφα είναι τα απλά πράγματα.`,

            home3_title: "Τιθορέα",
            home3_text: `Η Τιθορέα είναι το κέντρο του μονοπατιού Ε-65, δίπλα στο φημισμένο φαράγγι Καχάλας, όπου ο επισκέπτης έχει την ευκαιρία να θαυμάσει τον παλιό νερόμυλο «Εκκλησία το Μύλος», μέσα από μια μαγική διαδρομή με πολλές σπηλιές και βράχους σε διάφορα σχήματα.
Μπαίνοντας στο χωριό, аριστερά, σώζονται τμήματα τείχους ελληνιστικών χρόνων που προστάτευαν τον οικισμό. Στην αρχαιότητα, η Τιθορέα ήταν από τις σημαντικότερες πόλεις της Φωκίδας με ίχνη κατοίκησης από το 2000 π.Χ. Το αρχαίο της τείχος του 4ου αι. π.Χ. και το Κάστρο της, η προνομιούχα γеωγραφική της θέση, την κατέστησαν ισχυρό κέντρο της εποχής.
Η πόλη καταστράφηκε δύο φορές και μετά την τρίτη της ανοικοδόμηση απέκτησε τα όμορφα τείχη και το όνομα Τιθορέα. Αναζητήστε το μικρό παρεκκλήσι του Αγίου Ιωάννη του Θεολόγου. Έχει παλιές τοιχογραφίες, αλλά το πιο εντυπωσιακό είναι τα παλαιοχριστιανικά ψηφιδωτά του 3ου αι. π.Χ., ορατά κάτω από γυάλινο φωτιζόμενο δάπεδο.
Λόγω της ταυτόχρονης αγριάδας και γλυκύτητας του τοπίου, ο Οδυσσέας Ανδρούτσος έστησε εδώ το αρχηγείο του, στη διάσημη σπηλιά του, που οι ντόπιοι λένε «Μаύρη Трύπα». Χρειάζεται περίπου μιάμιση ώρα πεζοπορία για να φτάσει κανείς.
Ο Ανдρούτσος εγκαταστάθηκε εδώ με τη μητέρα του, τη σύζυγό του Ελένη, την αδελφή του, καπεταναίους, φρουρά και τον Άγγλο φιλέλληνα Τρελώουνι, ο οποίος έφερε και μικρά κανόνια από την Αγγλία. Πώς χωρούσαν όλοι; Πριν εγκατασταθεί, τεχνίτες διαμόρφωσαν τη σπηλιά, που είχε δύο κόλπους, ώστε να γίνει κατάλληλη για διαμονή. Υπήρξε η βάση του Ανдρούτσου από το 1822 έως το 1825. Πολλοί κυνηγοί θησαυρών πέρασαν από τη «Σπηλιά του Δυσσέα», όπως την αποκαλούσαν οι κάτοικοι της Τιθορέας. Θρύλοι για κρυμμένους θησαυρούς του Ανдρούτσου τη συνοδεύουν ακόμη.`,

            /* residence */
            res1_title: "Διαμονή",
            res1_text: "Καλώς ήρθατε σε ένα κομψό δωμάτιο όπου η φυσική απλότητα συναντά την άνεση και την έμπνευση. Οι λεπτομέρειες του εσωτερικού αναδεικνύουν την ιδέα του οικολογικού σχεδιασμού και της άνεσης, ενώ ένα ευρύχωρο παράθυρο ανοίγεται στη θέα της φύσης. Στο συγκρότημά μας θα βρείτε διαμερίσματα με πετρόκτιστο φινίρισμα, μπάνιο και μπαλκόνι, που μπορούν να φιλοξενήσουν από 2 έως 6 άτομα.",
            res2_title: "Δωμάτια",
            res2_text: "Δύο προσεγμένα μονά κρεβάτια με καθαρά λευκά σεντόνια βρίσκονται απέναντι από φαρδιές γυάλινες πόρτες που ανοίγουν σε υπέροχη θέα στον Παρνασσό. Διαθέτουμε επίσης δωμάτια για μεγαλύτερες οικογένειες — τα μεγαλύτερα έχουν έως 4 μονά κρεβάτια. Εφόσον χρειάζεται, παρέχουμε παιδικές κούνιες.",
            res3_title: "Μπάνιο",
            res3_text: "Το μπάνιο είναι σε φυσικό ύφος: ξύλινα δοκάρια στην οροφή, τοίχοι από φυσική πέτρα, κομψό έπιπλο με δύο στρογγυλούς νιπτήρες και απαλό φωτισμό που δημιουργεί αίσθηση ιδιωτικότητας και θαλπωρής. Το δωμάτιο διαθέτει όλα όσα χρειάζεστε για άνετη διαμονή: όλα τα απαραίτητα, προσεγμένες λεπτομέρειες και ζεστή ατμόσφαιρα.",
            res4_title: "Διατροφή",
            res4_text: "Μια ξεχωριστή απόλαυση είναι η παραδοσιακή ελληνική σπιτική κουζίνα, φτιαγμένη με αγάπη από τοπικά προϊόντα: φρέσκα λαχανικά, αρωματικά βότανα, ελαιόλαδο, φέτα, πίτες και πιάτα με συνταγές που περνούν προσεκτικά από γενιά σε γενιά. Ένα δείπνο με θέα στο βουνό γίνεται πραγματική ιεροτελεστία γεύσης και θαλπωρής.",

            /* destinations */
            dest1_title: "Παρνασσός",
            dest1_text: "Η παλαιότερη ιστορική αναφορά για την Τιθορέα γίνεται από τον Ηρόδοτο, ο οποίος, περιγράφοντας την πορεία του Ξέρξη προς την Αθήνα μετά τη Μάχη των Θερμοπυλών το 480 π.Χ., γράφει ότι οι Πέρσες στρατιώτες έκαψαν τις πόλεις της κοιλάδας του Κηφισού.",
            dest2_title: "Χιονοδρομικό Κέντρο Παρνασσού",
            dest2_text: `Το κέντρο διαθέτει 19 πίστες, 7 διαδρομές σκι, 2 βασικούς διαδρόμους επικοινωνίας με τους κάτω σταθμούς, 8 συνδετήριες διαδρομές και 3 μίνι πίστες αρχαρίων με baby lifts, συνολικού μήκους 36 χλμ. Οι καταβάσεις ξεκινούν από τα 2260 μ. και φτάνουν έως τα 1640 μ., με μήκη από 300 μ. έως 4 χλм., σε όλα τα επίπεδα δυσκολίας και για όλα τα επίπεδα ικανότητας.

Για τους λάτρεις της περιπέτειας υπάρχουν αρκετές εκτός πίστας «μαύρες» διαδρομές με πραγματικά βαθύ χιόνι και πολλή αδρεναλίνη, καθώς και 2 Fun parks σε Κελλάρια και Φτερόλακα. Τέσσερις από τις πίστες μας — Νο 6 Ίννιοχος, Νο 8 Ηρακλής, Νο 9 Οδυσσέας και Νο 2 Βάκχος — είναι πιστοποιημένες από τη Διεθνή Ομοσπονδία Σκι για τη διοργάνωση διεθνών αγώνων σκι.`,
            dest3_title: "Δημοφιλείς δραστηριότητες στον Παρνασσό",
            dest3_text: `Πεζοπορία — Εξερεύνηση του μυθικού βουνού του Απόλλωνα: τοπία που κόβουν την ανάσα. Αλπικά σκηνικά με θέα στη θάλασσα, ατελείωτα ελατοδάση, αρχαία μνημεία και το παλαιότερο Εθνικό Πάρκο της Ελλάδας. Με πάνω από 100 χλμ. σηματοδοτημένων μονοπατιών, ο Παρνασσός προσφέρει τη δυνατότητα να τον ανακαλύψει από άκρη σε άκρη πεζοπορώντας. E4 European long distance path. Among Delphi's hiking highlights is the part of E4 European long distance path, which connects Delphi with the alpine village of Eptalofos (Agoriani). The route passes through dense fir forests, crossing the core of the Parnassos National Park. The path is part of the ancient path that connected Delphi with ancient Lilaia and northern Greece.

Ski Mountaineering — Parnassos is one of the most popular mountains for ski mountaineering in Greece. The great area of the mountain and the Alpine field also contribute to this, as well as the great snow cover that lasts for many months, the famous and big routes, while the existence of the Ski Resort is also considered important as it makes it easier for many people to have access to the area of the ski mountaineering.

Climbing — Being one of the greatest mountains in Greece, Parnassos couldn't fail to have climbing fields. Here, there are some of the most known climbing fields in the country, such as the one of Kouvelos.`,

            /* activities */
            act1_front: "Γιόγκα στο ελαιόδεντρο",
            act1_title: "Γιόγκα στο ελαιόδεντρο",
            act1_p1: "• Πρωινές πρακτικές με θέα στο βουνό και τα πράσινα χωράφια",
            act1_p2: "• Απαλή γιόγκα για αρχάριους",
            act1_p3: "• Pilates για ενδυνάμωση και βελτίωση στάσης",
            act1_p4: "• Ήρεμη ατμόσφαιρα, γεμάτη από τη φυσική ενέργεια του τοπίου",

            act2_front: "Εργαστήριο Ελαιολάδου",
            act2_title: "Εργαστήριο Ελαιολάδου",
            act2_p1: "• Μάθε πώς να μαζεύεις ελιές με το χέρι με τον παραδοσιακό τρόπο",
            act2_p2: "• Δες πώς διαλέγουμε και ταξινομούμε τους καρπούς για το πάτημα",
            act2_p3: "• Ακολούθησε όλη τη διαδρομή από τη φρέσκια ελιά στο αγνό, ψυχρής έκθλιψης ελαιόλαδο",
            act2_p4: "• Δοκίμασε το φρέσκο χειροποίητο λάδι μας",

            act3_front: "Επαφή με τα ζώα της φάρμας",
            act3_title: "Επαφή με τα ζώα της φάρμας",
            act3_p1: "Καθώς εξερευνάτε τη φάρμα, θα γνωρίσετε φιλικά ζώα που θα σας χαροποιήσουν — από τα αξιαγάπητα πρόβατα και τα παιχνιδιάρικα κατσίκια μέχρι τις τρυφερές γάτες και τους πιστούς σκύλους. Θα συναντήσετε και χαριτωμένες κότες. Κάθε συνάντηση υπόσχεται χαρά και σύνδεση με τη φύση! Μπορείτε να χαϊδέψετε και να ταΐσετε τα ζώα μας.",

            /* join + modal */
            join_title: "Κλείσε δωμάτιο",
            form_name: "Όνομα*",
            form_email: "Email*",
            form_subject: "Θέμα*",
            form_message: "Μήνυμα*",
            form_join: "Κάνε κράτηση",
            modal_title: "Το μήνυμα στάλθηκε!",
            modal_text: "Ευχαριστούμε που επικοινωνήσατε με το Terra Nova. Θα απαντήσουμε το συντομότερο.",
            modal_close: "Κλείσιμο",

            /* footer */
            footer_quick: "Γρήγοροι Σύνδεσμοι",
            foot_home: "Αρχική",
            foot_residence: "Διαμονή",
            foot_destinations: "Προορισμοί",
            foot_activities: "Δραστηριότητες",
            footer_contact: "Επικοινωνία",
            footer_email: "Email: info@terranova.com",
            footer_phone: "Τηλέφωνο: +30 123 456 789",
            footer_follow: "Ακολουθήστε μας",
            copyright: "© 2025 Terra Nova. Με επιφύλαξη παντός δικαιώματος."
        }
    };

    const langBtn = document.getElementById("langToggle");
    const langBtnMobile = document.getElementById("langToggleMobile");
    let currentLang = localStorage.getItem("terraLang") || "EN";

    function applyTranslations(lang) {
        document.documentElement.setAttribute("lang", lang === "EN" ? "en" : "el");
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            const dict = translations[lang];
            if (!dict || !dict[key]) return;

            // Inputs / Textareas → placeholder
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = dict[key];
            } else {
                const isHtml = el.hasAttribute("data-html");
                if (isHtml) {
                    // turn \n\n into <br><br>
                    el.innerHTML = dict[key]
                        .split("\n\n").map(p => p.trim()).join("<br><br>");
                } else {
                    el.textContent = dict[key];
                }
            }
        });
        if (langBtn) langBtn.textContent = lang === "EN" ? "EN | GR" : "GR | EN";
        if (langBtnMobile) langBtnMobile.textContent = lang === "EN" ? "EN | GR" : "GR | EN";
        localStorage.setItem("terraLang", lang);
    }

    // Init on load
    applyTranslations(currentLang);

    // Toggle
    function toggleLanguage() {
        currentLang = currentLang === "EN" ? "GR" : "EN";
        applyTranslations(currentLang);
    }
    
    if (langBtn) {
        langBtn.addEventListener("click", toggleLanguage);
    }
    
    if (langBtnMobile) {
        langBtnMobile.addEventListener('click', toggleLanguage);
    }
});
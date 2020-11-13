var app = new Vue({
    el: '#root',
    data: {
        contact_index: 0,
        new_message: '',
        search: '',
        user:{
            avatar: 'img/avatar_4.png',
            name: 'Alby',
            stato: 'Love JDM'
        },
        contact: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.png',
                stato: 'online',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Bravissimo!',
                    status: 'sent'
                    }
                ]
            },
            {
                name: 'Sara',
                avatar: 'img/avatar_8.png',
                stato: 'online',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto bene! Tu?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Bene bene grazie =D',
                    status: 'sent'
                    }

                ]
            },
            {
                name: 'Darth Maul',
                avatar: 'img/avatar_5.png',
                stato: 'online',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Maul, c\'è una remota possibilità che tu possa tornare ad essere un Jedi?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Mai, scordatelo!',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Ci ho provato D:',
                    status: 'sent'
                    }
                ]
            },
            {
                name: 'Luke',
                avatar: 'img/avatar_6.png',
                stato: 'online',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricorda, che la forza sia con te, sempre!',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Lo ricorderò maestro, che la forza sia con lei!',
                    status: 'sent'
                    }
                ]
            }
        ]
    },
    methods: {
        changeContactInfo(index){
            this.contact_index = index;
            //console.log(index);
        },
        addNewMessage() {

            //Creo oggetto che verrà pushato in un determinato array messages di un contact
            let nuovo_messaggio = {
                date: '10/01/2020 15:52:00',
                message: '',
                status: 'sent'
            };

            //Associo a message this.new_message
            nuovo_messaggio.message = this.new_message;

            //Pusho il nuovo oggetto nell'array corrispondente al contatto cliccato.
            this.contact[this.contact_index].messages.push(nuovo_messaggio);

            //Ripulisco input
            this.new_message = '';

            setTimeout(() => {
                // Creo oggetto per risposta automatica
                var nuova_risposta = {
                    date: '10/01/2020 15:52:01',
                    message: 'ok',
                    status: 'received'
                };

                //Pusho il nuovo oggetto nell'array corrispondente al contatto a cui ho scritto.
                this.contact[this.contact_index].messages.push(nuova_risposta);
            },1500);
        }
    },
    computed: {
        filterContact: function() {
            return this.contact.filter((item) => {
                return item.name.toLowerCase().includes(this.search)
            });
        }
    }
});

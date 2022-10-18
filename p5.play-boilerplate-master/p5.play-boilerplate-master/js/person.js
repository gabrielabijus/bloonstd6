class person{
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        
    }
    getCount() {
        var personCountRef = database.ref('personCount');
        personCountRef.on("value", (data) => {
            personCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            personCount: count
        });
    }

    update() {
        var personIndex = "persons/person" + this.index;
        database.ref(personIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPersonInfo() {
        var personInfoRef = database.ref('persons');
        personInfoRef.on("value", (data) => {
            allPersons = data.val();
        })
    }

    getPersonAtEnd(){
        database.ref('personAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }
 
}

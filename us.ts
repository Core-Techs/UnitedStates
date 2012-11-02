module us {

    export class Type {
        constructor (public name: string) { }
        static S = new Type('State');
        static FD = new Type('Federal District');
        static M = new Type('Military');
        static FAS = new Type('Freely Associated State');
        static IA = new Type('Insular Area');
    }

    export class State {
        constructor (public name: string, public abbr: string, public type: Type) { }
    }

    export var states = [
        new State('Federated States of Micronesia', 'FM', Type.FAS),
        new State('Marshall Islands', 'MH', Type.FAS),
        new State('Palau', 'PW', Type.FAS),
        new State('District of Columbia', 'DC', Type.FD),
        new State('American Samoa', 'AS', Type.IA),
        new State('Guam', 'GU', Type.IA),
        new State('Northern Mariana Islands', 'MP', Type.IA),
        new State('Puerto Rico', 'PR', Type.IA),
        new State('Virgin Islands', 'VI', Type.IA),
        new State('Armed Forces Africa', 'AE', Type.M),
        new State('Armed Forces Americas', 'AA', Type.M),
        new State('Armed Forces Canada', 'AE', Type.M),
        new State('Armed Forces Europe', 'AE', Type.M),
        new State('Armed Forces Middle East', 'AE', Type.M),
        new State('Armed Forces Pacific', 'AP', Type.M),
        new State('Alabama', 'AL', Type.S),
        new State('Alaska', 'AK', Type.S),
        new State('Arizona', 'AZ', Type.S),
        new State('Arkansas', 'AR', Type.S),
        new State('California', 'CA', Type.S),
        new State('Colorado', 'CO', Type.S),
        new State('Connecticut', 'CT', Type.S),
        new State('Delaware', 'DE', Type.S),
        new State('Florida', 'FL', Type.S),
        new State('Georgia', 'GA', Type.S),
        new State('Hawaii', 'HI', Type.S),
        new State('Idaho', 'ID', Type.S),
        new State('Illinois', 'IL', Type.S),
        new State('Indiana', 'IN', Type.S),
        new State('Iowa', 'IA', Type.S),
        new State('Kansas', 'KS', Type.S),
        new State('Kentucky', 'KY', Type.S),
        new State('Louisiana', 'LA', Type.S),
        new State('Maine', 'ME', Type.S),
        new State('Maryland', 'MD', Type.S),
        new State('Massachusetts', 'MA', Type.S),
        new State('Michigan', 'MI', Type.S),
        new State('Minnesota', 'MN', Type.S),
        new State('Mississippi', 'MS', Type.S),
        new State('Missouri', 'MO', Type.S),
        new State('Montana', 'MT', Type.S),
        new State('Nebraska', 'NE', Type.S),
        new State('Nevada', 'NV', Type.S),
        new State('New Hampshire', 'NH', Type.S),
        new State('New Jersey', 'NJ', Type.S),
        new State('New Mexico', 'NM', Type.S),
        new State('New York', 'NY', Type.S),
        new State('North Carolina', 'NC', Type.S),
        new State('North Dakota', 'ND', Type.S),
        new State('Ohio', 'OH', Type.S),
        new State('Oklahoma', 'OK', Type.S),
        new State('Oregon', 'OR', Type.S),
        new State('Pennsylvania', 'PA', Type.S),
        new State('Rhode Island', 'RI', Type.S),
        new State('South Carolina', 'SC', Type.S),
        new State('South Dakota', 'SD', Type.S),
        new State('Tennessee', 'TN', Type.S),
        new State('Texas', 'TX', Type.S),
        new State('Utah', 'UT', Type.S),
        new State('Vermont', 'VT', Type.S),
        new State('Virginia', 'VA', Type.S),
        new State('Washington', 'WA', Type.S),
        new State('West Virginia', 'WV', Type.S),
        new State('Wisconsin', 'WI', Type.S),
        new State('Wyoming', 'WY', Type.S)
    ];

    export function getAbbreviation(name: string) : string {
        name = name.toLowerCase();
        for (var i = 0; i < states.length; i++) {
            if (states[i].name.toLowerCase() === name)
                return states[i].abbr;
        }
    }

    export function getName(abbreviation: string) : string {
        abbreviation = abbreviation.toLowerCase();
        for (var i = 0; i < states.length; i++) {
            if (states[i].abbr.toLowerCase() === abbreviation)
                return states[i].name;
        }
    }

    export function getNamesAndAbbreviations(type: Type): string[];
    export function getNamesAndAbbreviations(types: Type[]): string[];
    export function getNamesAndAbbreviations(typeOrTypes): string[] {
        return getNames(typeOrTypes).concat(getAbbreviations(typeOrTypes));
    }

    export function getAbbreviations(type: Type): string[];
    export function getAbbreviations(types: Type[]): string[];
    export function getAbbreviations(typeOrTypes): string[] {

        var states = getStates(typeOrTypes);
        var names = new string[];
        for (var i = 0; i < states.length; i++) {
            names.push(states[i].abbr);
        }
        return names;
    }

    export function getNames(type: Type): string[];
    export function getNames(types: Type[]): string[];
    export function getNames(typeOrTypes): string[] {

        var states = getStates(typeOrTypes);
        var names = new string[];
        for (var i = 0; i < states.length; i++) {
            names.push(states[i].name);
        }
        return names;
    }

    export function getStates(type: Type): State[];
    export function getStates(types: Type[]): State[];
    export function getStates(typeOrTypes) : State[] {

        if(!typeOrTypes)
            return states;

        if(typeOrTypes instanceof Type) {
            var type = <Type>typeOrTypes;
            var types = [type];
            
        }
        else if (typeOrTypes instanceof Array) {
            types = <Type[]>typeOrTypes;
        }
        else {
            throw 'typeOrTypes was not a Type or Array';
        }

        var results = new State[];
        for (var ti = 0; ti < types.length; ti++) {
            type = types[ti];
            for (var si = 0; si < states.length; si++) {
                var s = states[si];
                if (s.type.name === type.name) {
                    results.push(s);
                }
            }       
        }        
                
        return results;
    }
}


var us;
(function (us) {
    var Type = (function () {
        function Type(name) {
            this.name = name;
        }
        Type.S = new Type('State');
        Type.FD = new Type('Federal District');
        Type.M = new Type('Military');
        Type.FAS = new Type('Freely Associated State');
        Type.IA = new Type('Insular Area');
        return Type;
    })();
    us.Type = Type;
    var State = (function () {
        function State(name, abbr, type) {
            this.name = name;
            this.abbr = abbr;
            this.type = type;
        }
        return State;
    })();
    us.State = State;
    us.states = [
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
    function getAbbreviation(name) {
        name = name.toLowerCase();
        for (var i = 0; i < us.states.length; i++) {
            if (us.states[i].name.toLowerCase() === name) {
                return us.states[i].abbr;
            }
        }
    }
    us.getAbbreviation = getAbbreviation;
    function getName(abbreviation) {
        abbreviation = abbreviation.toLowerCase();
        for (var i = 0; i < us.states.length; i++) {
            if (us.states[i].abbr.toLowerCase() === abbreviation) {
                return us.states[i].name;
            }
        }
    }
    us.getName = getName;
    function getNamesAndAbbreviations() {
        return getNames.apply(this, arguments).concat(getAbbreviations.apply(this, arguments));
    }
    us.getNamesAndAbbreviations = getNamesAndAbbreviations;
    function getAbbreviations() {
        var states = getStates.apply(this, arguments);
        var names = new Array();
        for (var i = 0; i < states.length; i++) {
            names.push(states[i].abbr);
        }
        return names;
    }
    us.getAbbreviations = getAbbreviations;
    function getNames() {
        var states = getStates.apply(this, arguments);
        var names = new Array();
        for (var i = 0; i < states.length; i++) {
            names.push(states[i].name);
        }
        return names;
    }
    us.getNames = getNames;
    function getStates() {
        var results = new Array();
        if (arguments.length > 0) {
            for (var ai = 0; ai < arguments.length; ai++) {
                var type = arguments[ai];
                if (type instanceof Type) {
                    for (var si = 0; si < us.states.length; si++) {
                        var s = us.states[si];
                        if (type.name === s.type.name) {
                            results.push(s);
                        }
                    }
                }
            }
            return results;
        } else {
            return us.states;
        }
    }
    us.getStates = getStates;
})(us || (us = {}));


using System;
using System.Collections.Generic;
using System.Linq;

namespace CoreTechs
{
    public static class US
    {
        public static IEnumerable<State> GetStates()
        {
            yield return new State("Federated States of Micronesia", "FM", Type.FreelyAssociatedState);
            yield return new State("Marshall Islands", "MH", Type.FreelyAssociatedState);
            yield return new State("Palau", "PW", Type.FreelyAssociatedState);
            yield return new State("District of Columbia", "DC", Type.FederalDistrict);
            yield return new State("American Samoa", "AS", Type.InsularArea);
            yield return new State("Guam", "GU", Type.InsularArea);
            yield return new State("Northern Mariana Islands", "MP", Type.InsularArea);
            yield return new State("Puerto Rico", "PR", Type.InsularArea);
            yield return new State("Virgin Islands", "VI", Type.InsularArea);
            yield return new State("Armed Forces Africa", "AE", Type.Military);
            yield return new State("Armed Forces Americas", "AA", Type.Military);
            yield return new State("Armed Forces Canada", "AE", Type.Military);
            yield return new State("Armed Forces Europe", "AE", Type.Military);
            yield return new State("Armed Forces Middle East", "AE", Type.Military);
            yield return new State("Armed Forces Pacific", "AP", Type.Military);
            yield return new State("Alabama", "AL", Type.State);
            yield return new State("Alaska", "AK", Type.State);
            yield return new State("Arizona", "AZ", Type.State);
            yield return new State("Arkansas", "AR", Type.State);
            yield return new State("California", "CA", Type.State);
            yield return new State("Colorado", "CO", Type.State);
            yield return new State("Connecticut", "CT", Type.State);
            yield return new State("Delaware", "DE", Type.State);
            yield return new State("Florida", "FL", Type.State);
            yield return new State("Georgia", "GA", Type.State);
            yield return new State("Hawaii", "HI", Type.State);
            yield return new State("Idaho", "ID", Type.State);
            yield return new State("Illinois", "IL", Type.State);
            yield return new State("Indiana", "IN", Type.State);
            yield return new State("Iowa", "IA", Type.State);
            yield return new State("Kansas", "KS", Type.State);
            yield return new State("Kentucky", "KY", Type.State);
            yield return new State("Louisiana", "LA", Type.State);
            yield return new State("Maine", "ME", Type.State);
            yield return new State("Maryland", "MD", Type.State);
            yield return new State("Massachusetts", "MA", Type.State);
            yield return new State("Michigan", "MI", Type.State);
            yield return new State("Minnesota", "MN", Type.State);
            yield return new State("Mississippi", "MS", Type.State);
            yield return new State("Missouri", "MO", Type.State);
            yield return new State("Montana", "MT", Type.State);
            yield return new State("Nebraska", "NE", Type.State);
            yield return new State("Nevada", "NV", Type.State);
            yield return new State("New Hampshire", "NH", Type.State);
            yield return new State("New Jersey", "NJ", Type.State);
            yield return new State("New Mexico", "NM", Type.State);
            yield return new State("New York", "NY", Type.State);
            yield return new State("North Carolina", "NC", Type.State);
            yield return new State("North Dakota", "ND", Type.State);
            yield return new State("Ohio", "OH", Type.State);
            yield return new State("Oklahoma", "OK", Type.State);
            yield return new State("Oregon", "OR", Type.State);
            yield return new State("Pennsylvania", "PA", Type.State);
            yield return new State("Rhode Island", "RI", Type.State);
            yield return new State("South Carolina", "SC", Type.State);
            yield return new State("South Dakota", "SD", Type.State);
            yield return new State("Tennessee", "TN", Type.State);
            yield return new State("Texas", "TX", Type.State);
            yield return new State("Utah", "UT", Type.State);
            yield return new State("Vermont", "VT", Type.State);
            yield return new State("Virginia", "VA", Type.State);
            yield return new State("Washington", "WA", Type.State);
            yield return new State("West Virginia", "WV", Type.State);
            yield return new State("Wisconsin", "WI", Type.State);
            yield return new State("Wyoming", "WY", Type.State);
        }

        public static IEnumerable<State> GetStates(params Type[] types)
        {
            return GetStates().Where(x => types.Contains(x.Type));
        }

        public static State FindByName(string name)
        {
            return GetStates().FirstOrDefault(x => x.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
        }

        public static State FindByAbbreviation(string abbr)
        {
            return GetStates().FirstOrDefault(x => x.Abbreviation.Equals(abbr, StringComparison.OrdinalIgnoreCase));
        }
    }

    public class State
    {
        public State(string name, string abbr, Type type)
        {
            Name = name;
            Abbreviation = abbr;
            Type = type;
        }

        public Type Type { get; set; }
        public string Name { get; set; }
        public string Abbreviation { get; set; }
    }

    public enum Type
    {
        State,
        FederalDistrict,
        InsularArea,
        FreelyAssociatedState,
        Military
    }
}
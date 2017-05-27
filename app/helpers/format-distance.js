import Ember from 'ember';

export function formatDistance(params/*, hash*/) {
  let distance = params[0]
  let mileRatio = 0.000621371
  distance = parseFloat(distance * mileRatio).toFixed(2)

  return `${distance} miles`;
}

export default Ember.Helper.helper(formatDistance);

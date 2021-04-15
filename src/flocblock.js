'use strict';
// Remove the interest cohort API
if ('interestCohort' in Document.prototype) {
  delete Document.prototype.interestCohort;
}
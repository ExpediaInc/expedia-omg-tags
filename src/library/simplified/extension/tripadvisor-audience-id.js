b['tripAdvisorAudienceId'] = '';

if (typeof b['context.travelProfile.audienceId'] !== 'undefined') {
    b['tripAdvisorAudienceId'] = b['context.travelProfile.audienceId'];
} else if (typeof b['context.travelProfile.profile'] !== 'undefined') {
    // TODO: To be removed after context.travelProfile.audienceId is live
    b['tripAdvisorAudienceId'] = b['context.travelProfile.profile'];
}

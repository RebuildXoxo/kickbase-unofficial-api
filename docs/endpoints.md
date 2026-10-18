# Endpoint reference

Paths are relative to `https://api.kickbase.com`. `{name}` is a path parameter.
JSON property names are the app's Gson `@SerializedName` values.

## adPlacements

### `GET /v4/adPlacements/bettingPartner`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | query | `string` | False |

### `GET /v4/adPlacements/premiumMarketingBanner`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | query | `string` | False |

### `POST /v4/adPlacements/tracking`

Body: `AdPlacementTrackingRequest`; `application/json`

## base

### `GET /v4/base/items/{itemId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `itemId` | path | `string` | True |

### `POST /v4/base/items/{itemId}/click`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `itemId` | path | `string` | True |

### `GET /v4/base/news/permanent/{competitionId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |

### `GET /v4/base/news/{competitionId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `GET /v4/base/predictions/teams/{competitionId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |

### `GET /v4/base/stage`

## bonus

### `GET /v4/bonus/collect`

## challenges

### `POST /v4/challenges/favorites`

Body: `AddFavoriteRequest`; `application/json`

### `DELETE /v4/challenges/favorites/{favoriteUserId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `favoriteUserId` | path | `string` | True |

### `POST /v4/challenges/join`

Body: `JoinChallengesRequest`; `application/json`

### `GET /v4/challenges/lobby/archive`

### `GET /v4/challenges/lobby/divisionLadder`

### `GET /v4/challenges/lobby/explore`

### `GET /v4/challenges/lobby/explore/{challengeId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/lobby/overview`

### `GET /v4/challenges/lobby/overview/live`

### `GET /v4/challenges/lobby/profile`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `cycleId` | query | `string` | False |

### `POST /v4/challenges/lobby/skillPoints/collect`

### `GET /v4/challenges/lobby/skillPoints/summary`

### `GET /v4/challenges/selection`

### `GET /v4/challenges/socialhub`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `POST /v4/challenges/socialhub`

Body: `AddFavoriteRequest`; `application/json`

### `GET /v4/challenges/socialhub/invitation`

### `GET /v4/challenges/socialhub/search`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `start` | query | `int` | False |
| `max` | query | `int` | False |
| `query` | query | `string` | False |

### `DELETE /v4/challenges/socialhub/{followedUserId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `followedUserId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/boostinfos`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/boosts`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `POST /v4/challenges/{challengeId}/boosts`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

Body: `SelectBoostRequest`; `application/json`

### `GET /v4/challenges/{challengeId}/favorites`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `scope` | query | `int` | False |

### `GET /v4/challenges/{challengeId}/favorites/search`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `query` | query | `string` | False |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `POST /v4/challenges/{challengeId}/join`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

Body: `ChallengeSelectionRequest`; `application/json`

### `POST /v4/challenges/{challengeId}/lineup/clear`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `POST /v4/challenges/{challengeId}/lineup/fill`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/lineup/filters`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/lineup/livepitch`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `hasSeenAd` | query | `boolean` | False |

### `GET /v4/challenges/{challengeId}/lineup/overview`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/lineup/selection`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `position` | query | `string` | False |
| `start` | query | `int` | False |
| `query` | query | `string` | False |
| `teamFilter` | query | `string` | False |
| `probability` | query | `string` | False |
| `marketValueMin` | query | `long` | False |
| `marketValueMax` | query | `long` | False |
| `doubleMatchDay` | query | `boolean` | False |
| `sorting` | query | `int` | False |
| `playerToBeReplacedById` | query | `string` | False |
| `max` | query | `int` | False |

### `GET /v4/challenges/{challengeId}/lineup/teams`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/perfectlineup`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `seasonId` | query | `string` | False |
| `matchDay` | query | `int` | False |

### `GET /v4/challenges/{challengeId}/performance`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `dayNumber` | query | `int` | False |

### `GET /v4/challenges/{challengeId}/profile`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/ranking`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `dayNumber` | query | `int` | False |

### `GET /v4/challenges/{challengeId}/skillPoints/distribution`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/table`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/table/{userId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `userId` | path | `string` | True |

### `GET /v4/challenges/{challengeId}/top10`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |
| `scope` | query | `int` | False |
| `max` | query | `int` | False |

## chat

### `GET /v4/chat/leagueselection`

### `GET /v4/chat/leagueselection/{leagueId}/users`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/chat/refreshtoken`

## competitions

### `GET /v4/competitions`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `betaLeague` | query | `boolean` | False |

### `GET /v4/competitions/{competitionId}/matchdays`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |

### `GET /v4/competitions/{competitionId}/playercenter/{playerId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `playerId` | path | `string` | True |
| `dayNumber` | query | `int` | False |
| `leagueId` | query | `string` | False |
| `matchId` | query | `string` | False |
| `userId` | query | `string` | False |
| `seasonId` | query | `string` | False |

### `GET /v4/competitions/{competitionId}/players`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `position` | query | `int` | False |
| `sorting` | query | `int` | False |

### `GET /v4/competitions/{competitionId}/players/search`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `leagueId` | query | `string` | False |
| `query` | query | `string` | False |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `GET /v4/competitions/{competitionId}/players/{playerId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `GET /v4/competitions/{competitionId}/players/{playerId}/marketValue/{timeframe}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `playerId` | path | `string` | True |
| `timeframe` | path | `int` | True |

### `GET /v4/competitions/{competitionId}/players/{playerId}/performance`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `GET /v4/competitions/{competitionId}/ranking`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |

### `GET /v4/competitions/{competitionId}/table`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |

### `GET /v4/competitions/{competitionId}/teams/{teamId}/teamcenter`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `teamId` | path | `string` | True |
| `dayNumber` | query | `int` | False |
| `matchId` | query | `string` | False |

### `GET /v4/competitions/{competitionId}/teams/{teamId}/teamprofile`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `competitionId` | path | `string` | True |
| `teamId` | path | `string` | True |

## config

### `GET /v4/config`

### `GET /v4/config/onboarding`

### `GET /v4/config/version`

## indicators

### `GET /v4/indicators`

## invitations

### `GET /v4/invitations/{code}/validate`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `code` | path | `string` | True |

### `GET /v4/invitations/{leagueId}/code`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

## leagues

### `GET /v4/leagues`

### `POST /v4/leagues`

Body: `CreateNewLeagueRequest`; `application/json`

### `GET /v4/leagues/list`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `query` | query | `string` | False |
| `competitionId` | query | `string` | False |
| `gameplayMode` | query | `int` | False |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `GET /v4/leagues/selection`

### `GET /v4/leagues/{leagueId}/activitiesFeed`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `start` | query | `int` | False |
| `max` | query | `int` | False |
| `filter` | query | `string` | False |

### `GET /v4/leagues/{leagueId}/activitiesFeed/{activityId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `activityId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/activitiesFeed/{activityId}/comments`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `activityId` | path | `string` | True |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `POST /v4/leagues/{leagueId}/activitiesFeed/{activityId}/comments`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `activityId` | path | `string` | True |

Body: `SendLeagueActivityCommentRequest`; `application/json`

### `GET /v4/leagues/{leagueId}/activitiesFeed/{activityId}/summary/earnings`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `activityId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/activitiesFeed/{activityId}/summary/ranking`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `activityId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/activitiesFeed/{activityId}/summary/squad`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `activityId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/adminsettings/adjustment`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `AdminSettingsAdjustmentRequest`; `application/json`

### `POST /v4/leagues/{leagueId}/adminsettings/assignadmin`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `AssignAdminRequest`; `application/json`

### `GET /v4/leagues/{leagueId}/adminsettings/history`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/adminsettings/revertRankingMode`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/adminsettings/transfers`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `latestTransferId` | query | `string` | False |
| `max` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/adminsettings/transfers/users/{userId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `userId` | path | `string` | True |
| `latestTransferId` | query | `string` | False |
| `max` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/adminsettings/transfers/{transferId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `transferId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/adminsettings/transfers/{transferId}/undo`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `transferId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/adminsettings/users`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/battles/{type}/users`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `type` | path | `int` | True |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `POST /v4/leagues/{leagueId}/continue`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/image`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `multipart/form-data`.

### `POST /v4/leagues/{leagueId}/join`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/join/{code}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `code` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/lineup`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/lineup`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `ChallengeSetNewLineupPlayersRequest` or `SaveLineUpRequest`; `application/json`

### `POST /v4/leagues/{leagueId}/lineup/clear`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/lineup/fill`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `LineupAutoFillRequest`; `application/json`

### `GET /v4/leagues/{leagueId}/lineup/filters`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/lineup/overview`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/lineup/selection`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `position` | query | `string` | False |
| `start` | query | `int` | False |
| `query` | query | `string` | False |
| `teamFilter` | query | `string` | False |
| `probability` | query | `string` | False |
| `marketValueMin` | query | `long` | False |
| `marketValueMax` | query | `long` | False |
| `doubleMatchDay` | query | `boolean` | False |
| `sorting` | query | `int` | False |
| `playerToBeReplacedById` | query | `string` | False |
| `max` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/lineup/teams`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/managers/{managerId}/dashboard`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `managerId` | path | `string` | True |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/managers/{managerId}/performance`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `managerId` | path | `string` | True |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/managers/{managerId}/squad`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `managerId` | path | `string` | True |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/managers/{managerId}/teamvaluehistory`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `managerId` | path | `string` | True |
| `timeFrame` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/managers/{managerId}/transfer`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `managerId` | path | `string` | True |
| `leagueId` | path | `string` | True |
| `start` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/market`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/market`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `SetTargetPriceRequest`; `application/json`

### `DELETE /v4/leagues/{leagueId}/market/{playerId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/market/{playerId}/offers`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

Body: `PlaceAnOfferRequest`; `application/json`

### `DELETE /v4/leagues/{leagueId}/market/{playerId}/offers/{offerId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |
| `offerId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/market/{playerId}/offers/{offerId}/accept`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |
| `offerId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/market/{playerId}/offers/{offerId}/decline`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |
| `offerId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/market/{playerId}/sell`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/matchups`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/matchups/{userId}/history`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `userId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/me`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/me/budget`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/overview`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `includeManagersAndBattles` | query | `boolean` | False |

### `GET /v4/leagues/{leagueId}/players/{playerId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/players/{playerId}/marketValue/{timeframe}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |
| `timeframe` | path | `int` | True |

### `GET /v4/leagues/{leagueId}/players/{playerId}/performance`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/players/{playerId}/transferHistory`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |
| `start` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/players/{playerId}/transfers`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/ranking`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `dayNumber` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/ranking/country`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `scope` | query | `int` | False |
| `dayNumber` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/ranking/favorites`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `scope` | query | `int` | False |
| `dayNumber` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/ranking/favorites/search`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `query` | query | `string` | False |
| `start` | query | `int` | False |
| `max` | query | `int` | False |

### `GET /v4/leagues/{leagueId}/ranking/global`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `scope` | query | `int` | False |
| `dayNumber` | query | `int` | False |

### `POST /v4/leagues/{leagueId}/reset`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `ResetRequest`; `application/json`

### `POST /v4/leagues/{leagueId}/resetteams`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `ResetRequest`; `application/json`

### `DELETE /v4/leagues/{leagueId}/scoutedplayers`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/scoutedplayers`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `DELETE /v4/leagues/{leagueId}/scoutedplayers/{playerId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/scoutedplayers/{playerId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `playerId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/setteamseen`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/settings`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `POST /v4/leagues/{leagueId}/settings`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

Body: `SaveLeagueAdminSettingsRequest`; `application/json`

### `GET /v4/leagues/{leagueId}/settings/managers`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `start` | query | `int` | False |
| `max` | query | `int` | False |
| `query` | query | `string` | False |

### `GET /v4/leagues/{leagueId}/squad`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/teamcenter/myeleven`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `hasSeenAd` | query | `boolean` | False |

### `GET /v4/leagues/{leagueId}/teams/{teamId}/teamprofile`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `teamId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/unlockedSquad`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/user/achievements`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/user/achievements/{type}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `type` | path | `int` | True |

### `DELETE /v4/leagues/{leagueId}/users/{userId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `userId` | path | `string` | True |

### `GET /v4/leagues/{leagueId}/users/{userId}/teamcenter`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `userId` | path | `string` | True |
| `dayNumber` | query | `int` | False |
| `matchId` | query | `string` | False |
| `seasonId` | query | `string` | False |

### `POST /v4/leagues/{leagueId}/users/{userId}/unlock`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `leagueId` | path | `string` | True |
| `userId` | path | `string` | True |

## live

### `GET /v4/live/eventtypes`

### `GET /v4/live/eventtypes/{scoringRuleId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `scoringRuleId` | path | `int` | True |

## matches

### `GET /v4/matches/{matchId}`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `matchId` | path | `string` | True |

### `GET /v4/matches/{matchId}/betlink`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `matchId` | path | `string` | True |
| `choice` | query | `int` | False |

### `GET /v4/matches/{matchId}/events`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `matchId` | path | `string` | True |

### `GET /v4/matches/{matchId}/lineups`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `matchId` | path | `string` | True |

### `GET /v4/matches/{matchId}/overview`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `matchId` | path | `string` | True |

### `GET /v4/matches/{matchId}/statistics`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `matchId` | path | `string` | True |

### `POST /v4/matches/{matchId}/vote`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `matchId` | path | `string` | True |

Body: `MatchVoteRequest`; `application/json`

## onboarding

### `GET /v4/onboarding/challenge`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | query | `string` | False |

### `POST /v4/onboarding/challenge/{challengeId}/lineup/fill`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `challengeId` | path | `string` | True |

Body: `LineUpFormationRequest`; `application/json`

### `GET /v4/onboarding/freetrial`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `storeType` | query | `int` | False |

### `GET /v4/onboarding/gameMode/recommendation`

### `GET /v4/onboarding/league/invitation/{code}/validate`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `code` | path | `string` | True |

### `GET /v4/onboarding/rushasset`

### `GET /v4/onboarding/training/challenge`

## products

### `GET /v4/products`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `storeType` | query | `int` | False |

### `POST /v4/products/purchase`

Body: `ValidatePurchaseRequest`; `application/json`

## promotion

### `GET /v4/promotion`

## refiner

### `GET /v4/refiner/identify`

## settings

### `GET /v4/settings/subscriptionStatus`

## support

### `GET /v4/support/contactinfo`

## user

### `DELETE /v4/user`

### `POST /v4/user/checkemail`

Body: `CheckEmailV4Request`; `application/json`

### `POST /v4/user/email`

Body: `UpdateEmailRequest`; `application/json`

### `POST /v4/user/email/optin`

Body: `EmailOptInRequest`; `application/json`

### `POST /v4/user/email/optout`

### `POST /v4/user/email/sendVerification`

Body: `SendVerificationRequest`; `application/json`

### `POST /v4/user/email/verify`

Body: `VerifyEmailRequest`; `application/json`

### `POST /v4/user/forgotpassword`

Body: `ForgotPasswordV4Request`; `application/json`

### `POST /v4/user/login`

Body: `LoginUserRequest` or `LoginGoogleRequest` or `LoginAuth0Request` or `LoginFacebookRequest`; `application/json`

### `GET /v4/user/me`

### `POST /v4/user/password`

Body: `EditPasswordRequest`; `application/json`

### `POST /v4/user/refreshtokens`

Body: `RefreshTokenRequest`; `application/json`

### `POST /v4/user/register`

Body: `RegisterUserV4Request`; `application/json`

### `GET /v4/user/settings`

### `PUT /v4/user/settings`

Body: `UpdateAccountSettingsRequest`; `application/json`

### `POST /v4/user/settings/image`

Body: `multipart/form-data`.

### `POST /v4/user/targets`

Body: `FCMTokenRequest`; `application/json`

## usertracking

### `GET /v4/usertracking`

| Name | In | Type | Required |
| --- | --- | --- | --- |
| `types` | query | `string` | False |

### `POST /v4/usertracking`

Body: `UserTrackingRequest`; `application/json`

### `GET /v4/usertracking/firsttransfer`

### `POST /v4/usertracking/firsttransferseen`


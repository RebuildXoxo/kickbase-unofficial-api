# Models

Only fields present on the decompiled model are listed. A short wire name such as `i` or `n` is intentional: that is the JSON key.

## DivisionRankingData

### `DivisionRankingData`

`com.kkstr.bundesliga.data.DivisionRankingData`

| JSON | Java type |
| --- | --- |
| `dvim` | `string` |
| `dvi` | `int` |
| `dvn` | `string` |
| `prl` | `float` |
| `hdvn` | `string` |

## VersusChallengeTeamDetails

### `VersusChallengeTeamDetails`

`com.kkstr.bundesliga.data.VersusChallengeTeamDetails`

| JSON | Java type |
| --- | --- |
| `me` | `boolean` |
| `pc` | `long` |
| `lf` | `string` |
| `i` | `string` |
| `tp` | `long` |
| `gs` | `list` |

## events

### `BasePlayerEvent`

`com.kkstr.bundesliga.data.events.live.BasePlayerEvent`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `boolean` |
| `c` (no SerializedName) | `boolean` |
| `cei` | `string` |
| `d` (no SerializedName) | `int` |
| `ddi` | `string` |
| `ddp` | `Ljava/lang/Object;` |
| `e` (no SerializedName) | `boolean` |
| `att` | `int` |
| `eti` | `int` |
| `ke` | `int` |
| `k` | `list` |
| `psi` | `int` |
| `tps` | `list` |
| `pi` | `string` |
| `p` | `int` |
| `tid` | `string` |

### `BoostEventPayload`

`com.kkstr.bundesliga.data.events.live.BoostEventPayload`

| JSON | Java type |
| --- | --- |
| `boi` | `string` |
| `p` | `int` |
| `boiu` | `string` |

### `GameChangeEvent`

`com.kkstr.bundesliga.data.events.live.GameChangeEvent`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `boolean` |
| `cei` | `string` |
| `att` | `int` |
| `eti` | `int` |
| `gcr` | `int` |
| `ke` | `int` |
| `k` | `list` |
| `pi` | `string` |
| `p` | `int` |
| `tid` | `string` |

### `LiveChallengeTopPlayersEvent`

`com.kkstr.bundesliga.data.events.live.LiveChallengeTopPlayersEvent`

| JSON | Java type |
| --- | --- |
| `cis` | `list` |
| `pis` | `list` |

### `LiveCompetitionTableTeamChangedEvent`

`com.kkstr.bundesliga.data.events.live.LiveCompetitionTableTeamChangedEvent`

| JSON | Java type |
| --- | --- |
| `cpl` | `int` |
| `cp` | `long` |
| `gd` | `int` |
| `g` | `int` |
| `mc` | `int` |
| `tid` | `string` |

### `LiveEvent`

`com.kkstr.bundesliga.data.events.live.LiveEvent`

| JSON | Java type |
| --- | --- |
| `ei` | `string` |
| `mt` | `int` |
| `t` | `int` |

### `LiveMatchDayStatusChangedEvent`

`com.kkstr.bundesliga.data.events.live.LiveMatchDayStatusChangedEvent`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `LiveMatchGoalsChangedEvent`

`com.kkstr.bundesliga.data.events.live.LiveMatchGoalsChangedEvent`

| JSON | Java type |
| --- | --- |
| `t1g` | `int` |
| `t2g` | `int` |
| `mi` | `string` |

### `LiveMatchStatusEvent`

`com.kkstr.bundesliga.data.events.live.LiveMatchStatusEvent`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `boolean` |
| `mi` | `string` |
| `st` | `int` |

### `LiveMatchTimeChangedEvent`

`com.kkstr.bundesliga.data.events.live.LiveMatchTimeChangedEvent`

| JSON | Java type |
| --- | --- |
| `mi` | `string` |
| `mtd` | `string` |

### `LiveMessagesEvent`

`com.kkstr.bundesliga.data.events.live.LiveMessagesEvent`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `list` |
| `it` | `list` |

### `LivePlayerEvent`

`com.kkstr.bundesliga.data.events.live.LivePlayerEvent`

| JSON | Java type |
| --- | --- |
| `bos` | `list` |

### `PlayerCenterEvent`

`com.kkstr.bundesliga.data.events.live.PlayerCenterEvent`

| JSON | Java type |
| --- | --- |
| `bos` | `LivePitchBoost` |

## model

### `AchievementData`

`com.kkstr.bundesliga.data.model.AchievementData`

| JSON | Java type |
| --- | --- |
| `ise` | `boolean` |
| `n` | `string` |
| `ac` | `int` |
| `t` | `int` |

### `AchievementDetailData`

`com.kkstr.bundesliga.data.model.AchievementDetailData`

| JSON | Java type |
| --- | --- |
| `dt` | `string` |
| `d` | `string` |
| `er` | `long` |
| `ise` | `boolean` |
| `isrp` | `boolean` |
| `n` | `string` |
| `ac` | `int` |
| `t` | `int` |

### `ActivityFeedItemData`

`com.kkstr.bundesliga.data.model.ActivityFeedItemData`

| JSON | Java type |
| --- | --- |
| `adt` | `int` |
| `amt` | `long` |
| `bn` | `int` |
| `b` | `long` |
| `byr` | `string` |
| `day` | `int` |
| `d` | `string` |
| `imvp` | `boolean` |
| `iposl` | `boolean` |
| `ips` | `boolean` |
| `lim` | `string` |
| `f` | `string` |
| `lnm` | `string` |
| `i` | `string` |
| `ibun` | `string` |
| `mv` | `long` |
| `mdln` | `string` |
| `n` | `string` |
| `uc` | `int` |
| `spld` | `int` |
| `pl` | `int` |
| `fn` | `string` |
| `pi` | `string` |
| `pim` | `string` |
| `ln` | `string` |
| `pn` | `string` |
| `p` | `long` |
| `rsn` | `int` |
| `ds` | `int` |
| `sn` | `string` |
| `slr` | `string` |
| `tid` | `string` |
| `tim` | `string` |
| `trp` | `long` |
| `t` | `int` |
| `uim` | `string` |
| `uop` | `long` |
| `us` | `list` |

### `ActivityFeedItemDetailsData`

`com.kkstr.bundesliga.data.model.ActivityFeedItemDetailsData`

| JSON | Java type |
| --- | --- |
| `amd` | `boolean` |
| `adt` | `int` |
| `ui` | `string` |
| `unm` | `string` |
| `amt` | `long` |
| `ismc` | `int` |
| `ap` | `int` |
| `bn` | `int` |
| `b` | `long` |
| `byr` | `ActivityFeedTransferUserData` |
| `day` | `int` |
| `ds` | `int` |
| `do` | `long` |
| `dos` | `int` |
| `fp` | `ChallengePlayer[]` |
| `gpm` | `int` |
| `imvp` | `boolean` |
| `iposl` | `boolean` |
| `ips` | `boolean` |
| `lim` | `string` |
| `f` | `string` |
| `uc` | `int` |
| `lnm` | `string` |
| `t` | `int` |
| `lp` | `MyElevenPlayerItemV4[]` |
| `lpc` | `int` |
| `i` | `string` |
| `uim` | `string` |
| `n` | `string` |
| `spld` | `int` |
| `mv` | `long` |
| `mdct` | `int` |
| `mpst` | `int` |
| `mppu` | `int` |
| `namd` | `boolean` |
| `nrsn` | `int` |
| `nb` | `long` |
| `ncpte` | `boolean` |
| `ibui` | `string` |
| `nmpst` | `int` |
| `nmppu` | `int` |
| `nptspf` | `int` |
| `nrnkm` | `int` |
| `nupe` | `boolean` |
| `rsn` | `int` |
| `cpte` | `boolean` |
| `ptspf` | `int` |
| `rnkm` | `int` |
| `upe` | `boolean` |
| `pl` | `int` |
| `fn` | `string` |
| `pi` | `string` |
| `pim` | `string` |
| `ln` | `string` |
| `pn` | `string` |
| `tp` | `int` |
| `pos` | `int` |
| `slr` | `ActivityFeedTransferUserData` |
| `shn` | `int` |
| `sls` | `list` |
| `smc` | `int` |
| `sst` | `int` |
| `st` | `int` |
| `tid` | `string` |
| `tim` | `string` |
| `top` | `float` |
| `smdc` | `int` |
| `p` | `int` |
| `trp` | `long` |
| `tfhmvt` | `long` |
| `us` | `list` |
| `ibun` | `string` |

### `ActivityFeedMatchDayUserData`

`com.kkstr.bundesliga.data.model.ActivityFeedMatchDayUserData`

| JSON | Java type |
| --- | --- |
| `unm` | `string` |
| `pl` | `int` |
| `p` | `int` |
| `tp` | `int` |
| `i` | `string` |
| `uim` | `string` |
| `n` | `string` |

### `ActivityFeedTransferUserData`

`com.kkstr.bundesliga.data.model.ActivityFeedTransferUserData`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `uim` | `string` |
| `n` | `string` |

### `ActivityItemCommentData`

`com.kkstr.bundesliga.data.model.ActivityItemCommentData`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `string` |
| `comm` | `string` |
| `dt` | `string` |
| `ui` | `string` |
| `uim` | `string` |
| `unm` | `string` |
| `uurl` | `string` |

### `AdminSettingsManager`

`com.kkstr.bundesliga.data.model.AdminSettingsManager`

| JSON | Java type |
| --- | --- |
| `us` | `list` |
| `day` | `int` |
| `mt` | `double` |
| `tc` | `int` |

### `BaseClubPredictionsResponse`

`com.kkstr.bundesliga.data.model.BaseClubPredictionsResponse`

| JSON | Java type |
| --- | --- |
| `ts` | `string` |
| `tim` | `string` |
| `tid` | `string` |
| `plpim` | `string` |
| `tn` | `string` |

### `BattleDetailData`

`com.kkstr.bundesliga.data.model.BattleDetailData`

| JSON | Java type |
| --- | --- |
| `d` | `string` |
| `n` | `string` |
| `tc` | `int` |
| `us` | `list` |

### `BattleDetailUserData`

`com.kkstr.bundesliga.data.model.BattleDetailUserData`

| JSON | Java type |
| --- | --- |
| `pl` | `int` |
| `u` | `BattleUserData` |
| `v` | `string` |

### `BattleStatsData`

`com.kkstr.bundesliga.data.model.BattleStatsData`

| JSON | Java type |
| --- | --- |
| `d` | `string` |
| `n` | `string` |
| `t` | `int` |
| `u` | `BattleUserData` |

### `BattleUserData`

`com.kkstr.bundesliga.data.model.BattleUserData`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `n` | `string` |
| `uim` | `string` |

### `BettingPartnerAd`

`com.kkstr.bundesliga.data.model.BettingPartnerAd`

| JSON | Java type |
| --- | --- |
| `url` | `string` |
| `durl` | `string` |
| `lto` | `string` |
| `i` | `string` |
| `lf` | `string` |
| `ltw` | `string` |

### `BidData`

`com.kkstr.bundesliga.data.model.BidData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `long` |

### `ChallengeData`

`com.kkstr.bundesliga.data.model.ChallengeData`

| JSON | Java type |
| --- | --- |
| `b` | `int` |
| `col` | `string` |
| `ch` | `string` |
| `chim` | `string` |
| `p` | `int` |
| `cht` | `int` |
| `cpi` | `string` |
| `ige` | `boolean` |
| `f` | `string` |
| `iatl` | `boolean` |
| `il` | `boolean` |
| `ispd` | `boolean` |
| `li` | `string` |
| `lpc` | `int` |
| `lipc` | `int` |
| `n` | `string` |
| `fo` | `string` |
| `ppc` | `int` |
| `pl` | `int` |
| `sd` | `string` |
| `perfp` | `int` |
| `clpc` | `int` |
| `top` | `int` |
| `uc` | `int` |

### `ChallengeExploreData`

`com.kkstr.bundesliga.data.model.ChallengeExploreData`

| JSON | Java type |
| --- | --- |
| `ch` | `string` |
| `f` | `string` |
| `t` | `int` |
| `cpim` | `string` |
| `il` | `boolean` |
| `isn` | `boolean` |
| `fo` | `string` |
| `sd` | `string` |

### `ChallengeLobbyArchive`

`com.kkstr.bundesliga.data.model.ChallengeLobbyArchive`

| JSON | Java type |
| --- | --- |
| `ch` | `string` |
| `chim` | `string` |
| `chn` | `string` |
| `p` | `int` |
| `sid` | `string` |
| `cht` | `int` |
| `wn` | `string` |
| `cpi` | `string` |
| `col` | `string` |
| `ispd` | `boolean` |
| `li` | `string` |
| `day` | `int` |
| `clpc` | `int` |
| `perfp` | `int` |
| `skp` | `int` |
| `top` | `float` |

### `ChallengeLobbyArchiveWrapper`

`com.kkstr.bundesliga.data.model.ChallengeLobbyArchiveWrapper`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `cyn` | `string` |
| `wn` | `int` |

### `ChallengeManager`

`com.kkstr.bundesliga.data.model.ChallengeManager`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `n` | `string` |
| `uim` | `string` |

### `ChallengeMatchDay`

`com.kkstr.bundesliga.data.model.ChallengeMatchDay`

| JSON | Java type |
| --- | --- |
| `day` | `int` |
| `mdsn` | `string` |
| `mdln` | `string` |
| `ismdsa` | `boolean` |
| `p` | `int` |
| `t` | `int` |

### `ChallengeOnboardingTutorialData`

`com.kkstr.bundesliga.data.model.ChallengeOnboardingTutorialData`

| JSON | Java type |
| --- | --- |
| `chocggau` | `string` |
| `chsu` | `string` |
| `chorau` | `string` |
| `chocsgau` | `string` |
| `chowvu` | `string` |

### `ChallengePlayer`

`com.kkstr.bundesliga.data.model.ChallengePlayer`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `usc` | `int` |
| `n` | `string` |
| `pim` | `string` |
| `p` | `int` |
| `tid` | `string` |
| `usp` | `float` |

### `ChallengePrize`

`com.kkstr.bundesliga.data.model.ChallengePrize`

| JSON | Java type |
| --- | --- |
| `d` | `string` |
| `url` | `string` |
| `ti` | `string` |

### `ChallengeProfileRulesData`

`com.kkstr.bundesliga.data.model.ChallengeProfileRulesData`

| JSON | Java type |
| --- | --- |
| `lt` | `list` |
| `cpte` | `boolean` |
| `usfp` | `list` |
| `pamax` | `int` |
| `mpst` | `int` |
| `b` | `long` |
| `pamin` | `int` |

### `ChallengeTopManager`

`com.kkstr.bundesliga.data.model.ChallengeTopManager`

| JSON | Java type |
| --- | --- |
| `dvim` | `string` |
| `gurl` | `string` |
| `cur` | `boolean` |
| `ifa` | `boolean` |
| `isvf` | `boolean` |
| `ui` | `string` |
| `unm` | `string` |
| `pl` | `int` |
| `p` | `int` |
| `swc` | `int` |
| `perfp` | `int` |
| `clpc` | `int` |
| `uim` | `string` |
| `top` | `int` |

### `ChatLeagueData`

`com.kkstr.bundesliga.data.model.ChatLeagueData`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `string` |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `Lcom/google/firebase/Timestamp;` |
| `e` (no SerializedName) | `boolean` |
| `i` | `string` |
| `lim` | `string` |
| `n` | `string` |
| `uj` | `string` |

### `ChatLeagueUser`

`com.kkstr.bundesliga.data.model.ChatLeagueUser`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `uim` | `string` |
| `n` | `string` |

### `ChatToken`

`com.kkstr.bundesliga.data.model.ChatToken`

| JSON | Java type |
| --- | --- |
| `tkn` | `string` |
| `tknex` | `string` |

### `ClubCenterPlayer`

`com.kkstr.bundesliga.data.model.ClubCenterPlayer`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `long` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `boolean` |
| `e` (no SerializedName) | `int` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `boolean` |
| `i` | `string` |
| `k` | `list` |
| `n` | `string` |
| `pim` | `string` |
| `mdst` | `int` |
| `p` | `long` |

### `ClubMatch`

`com.kkstr.bundesliga.data.model.ClubMatch`

| JSON | Java type |
| --- | --- |
| `t1g` | `int` |
| `t1` | `string` |
| `dt` | `string` |
| `mi` | `string` |
| `mtd` | `string` |
| `st` | `int` |
| `t2g` | `int` |
| `t2` | `string` |
| `t1im` | `string` |
| `t2im` | `string` |

### `ClubResponse`

`com.kkstr.bundesliga.data.model.ClubResponse`

| JSON | Java type |
| --- | --- |
| `tim` | `string` |
| `tid` | `string` |

### `CompetitionClub`

`com.kkstr.bundesliga.data.model.CompetitionClub`

| JSON | Java type |
| --- | --- |
| `p` | `long` |
| `i` | `string` |
| `n` | `string` |

### `CompetitionConfiguration`

`com.kkstr.bundesliga.data.model.CompetitionConfiguration`

| JSON | Java type |
| --- | --- |
| `bpfurl` | `string` |
| `bpt` | `string` |
| `bsc` | `list` |
| `ntbsc` | `list` |
| `wtbsc` | `list` |
| `b` | `double` |
| `ntb` | `double` |
| `fts` | `int[]` |
| `cpi` | `string` |
| `cpim` | `string` |
| `cpt` | `int` |
| `il` | `boolean` |
| `lpc` | `int` |
| `lie` | `string` |
| `lis` | `string` |
| `rmcn` | `string` |
| `mgm` | `int` |
| `mds` | `int` |
| `pspt` | `int` |
| `rpcn` | `string` |
| `tv` | `double` |
| `onbtmu` | `string` |

### `CompetitionData`

`com.kkstr.bundesliga.data.model.CompetitionData`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `int` |
| `fb` | `string` |
| `cpim` | `string` |
| `fts` | `list` |
| `i` | `string` |
| `il` | `boolean` |
| `n` | `string` |
| `sd` | `string` |

### `CompetitionFixture`

`com.kkstr.bundesliga.data.model.CompetitionFixture`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `bo` | `MatchBettingOdds` |
| `c` (no SerializedName) | `boolean` |
| `d` (no SerializedName) | `boolean` |
| `t1g` | `int` |
| `t1` | `string` |
| `t1sy` | `string` |
| `fst` | `int` |
| `il` | `boolean` |
| `dt` | `string` |
| `day` | `int` |
| `mi` | `string` |
| `mtd` | `string` |
| `mt` | `int` |
| `st` | `int` |
| `t2g` | `int` |
| `t2` | `string` |
| `t2sy` | `string` |
| `t1im` | `string` |
| `t2im` | `string` |

### `CompetitionFixtureMatchDay`

`com.kkstr.bundesliga.data.model.CompetitionFixtureMatchDay`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `day` | `int` |
| `mdln` | `string` |

### `CompetitionSearchResult`

`com.kkstr.bundesliga.data.model.CompetitionSearchResult`

| JSON | Java type |
| --- | --- |
| `iotm` | `boolean` |
| `ofs` | `int` |
| `onm` | `string` |
| `pi` | `string` |
| `pim` | `string` |
| `n` | `string` |
| `mv` | `long` |
| `pos` | `int` |
| `st` | `int` |
| `tid` | `string` |

### `CompetitionTableClub`

`com.kkstr.bundesliga.data.model.CompetitionTableClub`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `long` |
| `c` (no SerializedName) | `int` |
| `cpl` | `int` |
| `cp` | `long` |
| `d` (no SerializedName) | `boolean` |
| `e` (no SerializedName) | `int` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `boolean` |
| `gd` | `int` |
| `il` | `boolean` |
| `mdp` | `long` |
| `mi` | `string` |
| `mc` | `int` |
| `pcpl` | `int` |
| `sp` | `long` |
| `tid` | `string` |
| `tim` | `string` |
| `tn` | `string` |

### `CompetitionTableConference`

`com.kkstr.bundesliga.data.model.CompetitionTableConference`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `n` | `string` |

### `CompetitionTableRankingClub`

`com.kkstr.bundesliga.data.model.CompetitionTableRankingClub`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `long` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `boolean` |
| `e` (no SerializedName) | `int` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `boolean` |
| `il` | `boolean` |
| `mdp` | `long` |
| `mdpl` | `int` |
| `spl` | `int` |
| `sp` | `long` |
| `tid` | `string` |
| `tim` | `string` |
| `tn` | `string` |

### `CompetitionTopPlayer`

`com.kkstr.bundesliga.data.model.CompetitionTopPlayer`

| JSON | Java type |
| --- | --- |
| `a` | `int` |
| `g` | `int` |
| `pi` | `string` |
| `il` | `boolean` |
| `mt` | `int` |
| `n` | `string` |
| `pim` | `string` |
| `st` | `int` |
| `p` | `int` |
| `pos` | `int` |
| `tid` | `string` |

### `ConfigUrls`

`com.kkstr.bundesliga.data.model.ConfigUrls`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `string` |
| `f` (no SerializedName) | `string` |
| `g` (no SerializedName) | `string` |
| `h` (no SerializedName) | `string` |
| `i` (no SerializedName) | `string` |
| `j` (no SerializedName) | `string` |
| `k` (no SerializedName) | `string` |
| `l` (no SerializedName) | `string` |
| `m` (no SerializedName) | `string` |
| `n` (no SerializedName) | `string` |

### `CreateNewLeagueData`

`com.kkstr.bundesliga.data.model.CreateNewLeagueData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `boolean` |
| `e` (no SerializedName) | `string` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `int` |
| `h` (no SerializedName) | `int` |
| `i` (no SerializedName) | `boolean` |
| `j` (no SerializedName) | `string` |
| `k` (no SerializedName) | `long` |
| `l` (no SerializedName) | `int` |
| `m` (no SerializedName) | `int` |
| `n` (no SerializedName) | `int` |
| `o` (no SerializedName) | `int` |
| `p` (no SerializedName) | `boolean` |
| `q` (no SerializedName) | `int` |
| `r` (no SerializedName) | `int` |
| `s` (no SerializedName) | `boolean` |

### `CurrentDivisionProgress`

`com.kkstr.bundesliga.data.model.CurrentDivisionProgress`

| JSON | Java type |
| --- | --- |
| `dvi` | `string` |
| `u` | `UserBasicData` |
| `skp` | `int` |
| `skpt` | `int` |

### `DailyBonusData`

`com.kkstr.bundesliga.data.model.DailyBonusData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `list` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `string` |
| `f` (no SerializedName) | `string` |
| `g` (no SerializedName) | `string` |
| `h` (no SerializedName) | `string` |
| `i` (no SerializedName) | `string` |

### `DivisionProgress`

`com.kkstr.bundesliga.data.model.DivisionProgress`

| JSON | Java type |
| --- | --- |
| `dvi` | `string` |
| `dvim` | `string` |
| `dvn` | `string` |
| `bod` | `int` |
| `uc` | `int` |
| `ispd` | `boolean` |

### `DivisionsProgressResponse`

`com.kkstr.bundesliga.data.model.DivisionsProgressResponse`

| JSON | Java type |
| --- | --- |
| `comr` | `string` |
| `dv` | `CurrentDivisionProgress` |
| `ed` | `string` |
| `dse` | `string` |
| `dvs` | `list` |
| `perfb` | `string` |
| `prim` | `string` |

### `EmptyStateManager`

`com.kkstr.bundesliga.data.model.EmptyStateManager`

| JSON | Java type |
| --- | --- |
| `ui` | `string` |
| `uim` | `string` |

### `EnabledFeaturesData`

`com.kkstr.bundesliga.data.model.EnabledFeaturesData`

| JSON | Java type |
| --- | --- |
| `lob` | `boolean` |
| `as2e` | `boolean` |
| `aue` | `boolean` |
| `mdsce` | `boolean` |
| `lrfg` | `string` |
| `onb` | `boolean` |
| `onb2` | `boolean` |

### `EventType`

`com.kkstr.bundesliga.data.model.EventType`

| JSON | Java type |
| --- | --- |
| `ti` | `string` |
| `i` | `int` |

### `FixedPlayerChallenge`

`com.kkstr.bundesliga.data.model.FixedPlayerChallenge`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `boolean` |
| `mv` | `long` |
| `i` | `string` |
| `pim` | `string` |
| `n` | `string` |
| `pos` | `int` |
| `shn` | `int` |
| `tid` | `string` |
| `tim` | `string` |

### `FixedPlayerChallengeData`

`com.kkstr.bundesliga.data.model.FixedPlayerChallengeData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `list` |

### `FixedPlayerItem`

`com.kkstr.bundesliga.data.model.FixedPlayerItem`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `cpi` | `string` |
| `mv` | `long` |
| `pi` | `string` |
| `pim` | `string` |
| `pn` | `string` |
| `pos` | `int` |
| `shn` | `int` |
| `prob` | `int` |
| `tid` | `string` |

### `GameLeagueData`

`com.kkstr.bundesliga.data.model.GameLeagueData`

| JSON | Java type |
| --- | --- |
| `cpi` | `string` |
| `cpim` | `string` |
| `gpm` | `int` |
| `hum` | `boolean` |
| `li` | `string` |
| `lim` | `string` |
| `lnm` | `string` |
| `mgc` | `int` |
| `mgm` | `int` |
| `isvf` | `boolean` |

### `InvitedLeagueData`

`com.kkstr.bundesliga.data.model.InvitedLeagueData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `string` |

### `JoinChallengeData`

`com.kkstr.bundesliga.data.model.JoinChallengeData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `list` |
| `f` (no SerializedName) | `string` |
| `g` (no SerializedName) | `string` |

### `JoinLeagueData`

`com.kkstr.bundesliga.data.model.JoinLeagueData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `int` |
| `e` (no SerializedName) | `string` |

### `LeagueActivityItemData`

`com.kkstr.bundesliga.data.model.LeagueActivityItemData`

| JSON | Java type |
| --- | --- |
| `data` | `ActivityFeedItemData` |
| `coc` | `int` |
| `dt` | `string` |
| `t` | `int` |
| `i` | `string` |

### `LeagueBonusData`

`com.kkstr.bundesliga.data.model.LeagueBonusData`

| JSON | Java type |
| --- | --- |
| `v` | `int` |
| `b` | `int` |
| `day` | `int` |
| `li` | `string` |
| `lim` | `string` |
| `lnm` | `string` |

### `LeagueData`

`com.kkstr.bundesliga.data.model.LeagueData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `int` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `int` |
| `h` (no SerializedName) | `int` |
| `i` (no SerializedName) | `int` |
| `j` (no SerializedName) | `long` |
| `k` (no SerializedName) | `boolean` |
| `l` (no SerializedName) | `int` |
| `m` (no SerializedName) | `int` |
| `n` (no SerializedName) | `boolean` |
| `o` (no SerializedName) | `boolean` |
| `p` (no SerializedName) | `string` |
| `q` (no SerializedName) | `boolean` |
| `r` (no SerializedName) | `boolean` |

### `LeagueDataV4`

`com.kkstr.bundesliga.data.model.LeagueDataV4`

| JSON | Java type |
| --- | --- |
| `lts` | `list` |
| `ch` | `string` |
| `cht` | `int` |
| `cpi` | `string` |
| `gpm` | `int` |
| `lim` | `string` |
| `i` | `string` |
| `lpc` | `int` |
| `n` | `string` |

### `LeagueManager`

`com.kkstr.bundesliga.data.model.LeagueManager`

| JSON | Java type |
| --- | --- |
| `cbu` | `boolean` |
| `i` | `string` |
| `isAdmin` | `boolean` |
| `isu` | `boolean` |
| `n` | `string` |
| `uim` | `string` |

### `LeagueRankingUser`

`com.kkstr.bundesliga.data.model.LeagueRankingUser`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `pa` | `boolean` |
| `b` (no SerializedName) | `long` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `boolean` |
| `e` (no SerializedName) | `int` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `boolean` |
| `h` (no SerializedName) | `string` |
| `hhpl` | `int` |
| `hhsp` | `int` |
| `i` (no SerializedName) | `int` |
| `i` | `string` |
| `adm` | `boolean` |
| `iapl` | `boolean` |
| `jd` | `string` |
| `lp` | `list` |
| `lipc` | `int` |
| `hhmp` | `int` |
| `mdpl` | `long` |
| `mdp` | `long` |
| `n` | `string` |
| `ppc` | `int` |
| `psp` | `int` |
| `pspts` | `int` |
| `pswc` | `int` |
| `spl` | `long` |
| `shpl` | `long` |
| `sp` | `long` |
| `shp` | `long` |
| `swc` | `int` |
| `tv` | `double` |
| `uim` | `string` |

### `LinkedStringArrayMapModel`

`com.kkstr.bundesliga.data.model.LinkedStringArrayMapModel`

| JSON | Java type |
| --- | --- |
| `items` | `list` |

### `Manager`

`com.kkstr.bundesliga.data.model.Manager`

| JSON | Java type |
| --- | --- |
| `pa` | `boolean` |
| `bos` | `LivePitchBoost` |
| `i` | `string` |
| `lpi` | `list` |
| `mdp` | `long` |
| `pl` | `int` |
| `uim` | `string` |

### `ManagerPlayer`

`com.kkstr.bundesliga.data.model.ManagerPlayer`

| JSON | Java type |
| --- | --- |
| `dt` | `string` |
| `pi` | `string` |
| `pn` | `string` |
| `othnm` | `string` |
| `pim` | `string` |
| `tid` | `string` |
| `trp` | `long` |
| `tty` | `int` |

### `ManagerProfileMatchDayPerformance`

`com.kkstr.bundesliga.data.model.ManagerProfileMatchDayPerformance`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `int` |
| `b` (no SerializedName) | `string` |
| `md` | `string` |
| `cur` | `boolean` |
| `day` | `int` |
| `tw` | `boolean` |
| `mdp` | `int` |

### `ManagerSeason`

`com.kkstr.bundesliga.data.model.ManagerSeason`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `sid` | `string` |
| `mdw` | `int` |
| `it` | `list` |
| `sn` | `string` |
| `tp` | `int` |

### `MatchBettingOdds`

`com.kkstr.bundesliga.data.model.MatchBettingOdds`

| JSON | Java type |
| --- | --- |
| `o2` | `double` |
| `ox` | `double` |
| `o1` | `double` |

### `MatchBroadcasters`

`com.kkstr.bundesliga.data.model.MatchBroadcasters`

| JSON | Java type |
| --- | --- |
| `n` | `string` |
| `t` | `int` |
| `url` | `string` |
| `i` | `string` |
| `durl` | `string` |
| `lurl` | `string` |

### `MatchDaySummarySlideContentData`

`com.kkstr.bundesliga.data.model.MatchDaySummarySlideContentData`

| JSON | Java type |
| --- | --- |
| `ach` | `list` |
| `te` | `long` |
| `mop` | `MatchDaySummaryCheckoutPlayerResponse` |
| `pl` | `int` |
| `p` | `int` |
| `squ` | `MatchDaySummarySquadUpdateResponse` |
| `u` | `MatchDaySummaryCheckoutTeamRowResponse` |
| `rws` | `list` |
| `wnr` | `MatchDaySummaryRankingUser` |
| `spr` | `SponsorLogoAd` |
| `tc` | `int` |

### `MatchDaySummarySlideData`

`com.kkstr.bundesliga.data.model.MatchDaySummarySlideData`

| JSON | Java type |
| --- | --- |
| `data` | `MatchDaySummarySlideContentData` |
| `coc` | `int` |
| `t` | `int` |

### `MatchupItem`

`com.kkstr.bundesliga.data.model.MatchupItem`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `boolean` |
| `c` (no SerializedName) | `boolean` |
| `d` (no SerializedName) | `int` |
| `e` (no SerializedName) | `list` |
| `f` (no SerializedName) | `boolean` |
| `u1` | `MatchupUser` |
| `u2` | `MatchupUser` |

### `MatchupMatchDay`

`com.kkstr.bundesliga.data.model.MatchupMatchDay`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `string` |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `boolean` |
| `day` | `int` |
| `ed` | `string` |
| `il` | `boolean` |
| `it` | `list` |
| `mdln` | `string` |
| `sd` | `string` |

### `MatchupUser`

`com.kkstr.bundesliga.data.model.MatchupUser`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `int` |
| `cpti` | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `boolean` |
| `hll` | `boolean` |
| `hhpl` | `int` |
| `hhsp` | `int` |
| `i` | `string` |
| `uim` | `string` |
| `lp` | `list` |
| `n` | `string` |
| `pl` | `int` |
| `p` | `int` |
| `pa` | `boolean` |
| `shp` | `int` |
| `sw` | `int` |

### `MyChallenge`

`com.kkstr.bundesliga.data.model.MyChallenge`

| JSON | Java type |
| --- | --- |
| `b` | `int` |
| `ch` | `string` |
| `chim` | `string` |
| `cht` | `int` |
| `cpi` | `string` |
| `ige` | `boolean` |
| `f` | `string` |
| `iatl` | `boolean` |
| `il` | `boolean` |
| `li` | `string` |
| `lpc` | `int` |
| `lipc` | `int` |
| `day` | `int` |
| `n` | `string` |
| `fo` | `string` |
| `ppc` | `int` |
| `pl` | `int` |
| `sid` | `string` |
| `clpc` | `int` |
| `uc` | `int` |

### `MyElevenPlayerItemV4`

`com.kkstr.bundesliga.data.model.MyElevenPlayerItemV4`

| JSON | Java type |
| --- | --- |
| `ictp` | `boolean` |
| `perl` | `boolean` |
| `k` | `list` |
| `md` | `string` |
| `mi` | `string` |
| `mt` | `int` |
| `mst` | `int` |
| `n` | `string` |
| `i` | `string` |
| `pim` | `string` |
| `st` | `int` |
| `p` | `int` |
| `pos` | `int` |
| `tid` | `string` |

### `MyPlayer`

`com.kkstr.bundesliga.data.model.MyPlayer`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `b` (no SerializedName) | `boolean` |
| `c` (no SerializedName) | `boolean` |
| `d` (no SerializedName) | `boolean` |
| `e` (no SerializedName) | `string` |
| `i` | `string` |
| `ictp` | `boolean` |
| `iotm` | `boolean` |
| `ht` | `boolean` |
| `lo` | `int` |
| `lst` | `int` |
| `mv` | `long` |
| `mvgl` | `long` |
| `mc` | `int` |
| `mdst` | `int` |
| `n` | `string` |
| `ofc` | `int` |
| `os` | `string` |
| `ots` | `list` |
| `uim` | `string` |
| `ph` | `list` |
| `pim` | `string` |
| `oui` | `int` |
| `onm` | `string` |
| `p` | `int` |
| `pos` | `int` |
| `sdmvt` | `long` |
| `prob` | `int` |
| `st` | `int` |
| `stl` | `list` |
| `tid` | `string` |
| `tfhmvt` | `long` |

### `NewPlayersData`

`com.kkstr.bundesliga.data.model.NewPlayersData`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `mv` | `long` |
| `n` | `string` |
| `i` | `string` |
| `pim` | `string` |
| `pos` | `int` |
| `shn` | `int` |
| `tid` | `int` |
| `tn` | `string` |

### `NewTeamData`

`com.kkstr.bundesliga.data.model.NewTeamData`

| JSON | Java type |
| --- | --- |
| `pls` | `list` |

### `NewsDetailData`

`com.kkstr.bundesliga.data.model.NewsDetailData`

| JSON | Java type |
| --- | --- |
| `cnt` | `string` |
| `dt` | `string` |
| `d` | `string` |
| `rl` | `string` |
| `ims` | `string` |
| `ci` | `string` |
| `i` | `string` |
| `ti` | `string` |
| `t` | `int` |

### `NewsItemData`

`com.kkstr.bundesliga.data.model.NewsItemData`

| JSON | Java type |
| --- | --- |
| `dt` | `string` |
| `d` | `string` |
| `rl` | `string` |
| `ci` | `string` |
| `ikn` | `boolean` |
| `lb` | `string` |
| `i` | `string` |
| `ti` | `string` |
| `t` | `int` |
| `url` | `string` |

### `OnboardingCompetition`

`com.kkstr.bundesliga.data.model.OnboardingCompetition`

| JSON | Java type |
| --- | --- |
| `aam` | `boolean` |
| `asm` | `boolean` |
| `b` (no SerializedName) | `boolean` |
| `cpi` | `string` |
| `cpim` | `string` |
| `cpn` | `string` |
| `ch` | `string` |

### `OnboardingLineupData`

`com.kkstr.bundesliga.data.model.OnboardingLineupData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `list` |

### `OnboardingMode`

`com.kkstr.bundesliga.data.model.OnboardingMode`

| JSON | Java type |
| --- | --- |
| `anas` | `string` |
| `as` | `string` |
| `dif` | `int` |
| `gpm` | `int` |
| `ts` | `int` |
| `uc` | `int` |

### `OnboardingTooltipData`

`com.kkstr.bundesliga.data.model.OnboardingTooltipData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `Llwh;` |
| `e` (no SerializedName) | `int` |
| `f` (no SerializedName) | `string` |
| `g` (no SerializedName) | `int` |

### `OnboardingWizardData`

`com.kkstr.bundesliga.data.model.OnboardingWizardData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `string` |
| `f` (no SerializedName) | `string` |
| `g` (no SerializedName) | `string` |
| `h` (no SerializedName) | `list` |
| `i` (no SerializedName) | `string` |
| `j` (no SerializedName) | `boolean` |

### `OpponentTeamData`

`com.kkstr.bundesliga.data.model.OpponentTeamData`

| JSON | Java type |
| --- | --- |
| `mst` | `int` |
| `i` | `string` |
| `tim` | `string` |

### `PermanentNewsItem`

`com.kkstr.bundesliga.data.model.PermanentNewsItem`

| JSON | Java type |
| --- | --- |
| `durl` | `string` |
| `lf` | `string` |
| `i` | `string` |
| `lurl` | `string` |
| `url` | `string` |

### `PermanentNewsResponse`

`com.kkstr.bundesliga.data.model.PermanentNewsResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `PlayerData`

`com.kkstr.bundesliga.data.model.PlayerData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `string` |
| `f` (no SerializedName) | `string` |
| `g` (no SerializedName) | `int` |
| `h` (no SerializedName) | `int` |
| `i` (no SerializedName) | `int` |
| `j` (no SerializedName) | `string` |
| `k` (no SerializedName) | `string` |

### `PlayerFirstTransfer`

`com.kkstr.bundesliga.data.model.PlayerFirstTransfer`

| JSON | Java type |
| --- | --- |
| `seen` | `boolean` |
| `fn` | `string` |
| `i` | `string` |
| `pim` | `string` |
| `ln` | `string` |

### `PlayerMarketValue`

`com.kkstr.bundesliga.data.model.PlayerMarketValue`

| JSON | Java type |
| --- | --- |
| `mv` | `double` |
| `dt` | `long` |

### `PlayerMatchDayPerformance`

`com.kkstr.bundesliga.data.model.PlayerMatchDayPerformance`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `string` |
| `k` | `int[]` |
| `b` (no SerializedName) | `string` |
| `cur` | `boolean` |
| `md` | `string` |
| `day` | `int` |
| `mdsn` | `string` |
| `mi` | `string` |
| `mdst` | `int` |
| `mp` | `string` |
| `ap` | `int` |
| `asp` | `int` |
| `p` | `int` |
| `st` | `int` |
| `pt` | `string` |
| `tp` | `int` |
| `t1g` | `int` |
| `t1` | `string` |
| `t1im` | `string` |
| `t2g` | `int` |
| `t2` | `string` |
| `t2im` | `string` |

### `PlayerOnTransfer`

`com.kkstr.bundesliga.data.model.PlayerOnTransfer`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `int` |
| `dt` | `string` |
| `exs` | `long` |
| `fn` | `string` |
| `i` | `string` |
| `isn` | `boolean` |
| `iposl` | `boolean` |
| `mv` | `long` |
| `mvt` | `int` |
| `mc` | `int` |
| `n` | `string` |
| `ofs` | `list` |
| `ofc` | `int` |
| `u` | `PlayerOwner` |
| `uim` | `string` |
| `pim` | `string` |
| `p` | `int` |
| `pos` | `int` |
| `prob` | `int` |
| `st` | `int` |
| `prc` | `long` |
| `tid` | `string` |
| `uoid` | `string` |
| `uop` | `long` |

### `PlayerOwner`

`com.kkstr.bundesliga.data.model.PlayerOwner`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `uim` | `string` |
| `n` | `string` |

### `PlayerPerformanceHistory`

`com.kkstr.bundesliga.data.model.PlayerPerformanceHistory`

| JSON | Java type |
| --- | --- |
| `hp` | `boolean` |
| `p` | `long` |

### `PlayerProfileOfferItem`

`com.kkstr.bundesliga.data.model.PlayerProfileOfferItem`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `boolean` |
| `uoid` | `string` |
| `uop` | `long` |
| `st` | `int` |
| `u` | `string` |
| `uim` | `string` |
| `unm` | `string` |

### `PlayerSeasonPerformance`

`com.kkstr.bundesliga.data.model.PlayerSeasonPerformance`

| JSON | Java type |
| --- | --- |
| `n` | `string` |
| `ph` | `list` |
| `sid` | `string` |
| `ti` | `string` |

### `PlayerTransferHistoryItem`

`com.kkstr.bundesliga.data.model.PlayerTransferHistoryItem`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `dt` | `string` |
| `trp` | `long` |
| `t` | `int` |
| `u` | `string` |
| `uim` | `string` |
| `unm` | `string` |

### `PlayersWithExistingBids`

`com.kkstr.bundesliga.data.model.PlayersWithExistingBids`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `list` |

### `PostMatchCorrections`

`com.kkstr.bundesliga.data.model.PostMatchCorrections`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `list` |

### `ProductBenefitData`

`com.kkstr.bundesliga.data.model.ProductBenefitData`

| JSON | Java type |
| --- | --- |
| `msty` | `int` |
| `t` | `int` |

### `ProductData`

`com.kkstr.bundesliga.data.model.ProductData`

| JSON | Java type |
| --- | --- |
| `bnf` | `list` |
| `d` | `string` |
| `pit` | `int` |
| `act` | `boolean` |
| `msty` | `int` |
| `i` | `string` |
| `ti` | `string` |

### `ProductsListData`

`com.kkstr.bundesliga.data.model.ProductsListData`

| JSON | Java type |
| --- | --- |
| `ct` | `string` |
| `it` | `list` |

### `RefinerDataResponse`

`com.kkstr.bundesliga.data.model.RefinerDataResponse`

| JSON | Java type |
| --- | --- |
| `userTraits` | `list` |

### `ScoutPlayer`

`com.kkstr.bundesliga.data.model.ScoutPlayer`

| JSON | Java type |
| --- | --- |
| `pi` | `string` |
| `iotm` | `boolean` |
| `mv` | `long` |
| `n` | `string` |
| `onm` | `string` |
| `pim` | `string` |
| `pos` | `int` |
| `st` | `int` |
| `tid` | `int` |

### `ScreenData`

`com.kkstr.bundesliga.data.model.ScreenData`

| JSON | Java type |
| --- | --- |
| `A` (no SerializedName) | `int` |
| `B` (no SerializedName) | `boolean` |
| `C` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `string` |
| `e` (no SerializedName) | `string` |
| `f` (no SerializedName) | `string` |
| `g` (no SerializedName) | `int` |
| `h` (no SerializedName) | `Ldg3;` |
| `i` (no SerializedName) | `string` |
| `j` (no SerializedName) | `int` |
| `k` (no SerializedName) | `string` |
| `l` (no SerializedName) | `string` |
| `m` (no SerializedName) | `boolean` |
| `n` (no SerializedName) | `string` |
| `o` (no SerializedName) | `string` |
| `p` (no SerializedName) | `string` |
| `q` (no SerializedName) | `int` |
| `r` (no SerializedName) | `int` |
| `s` (no SerializedName) | `boolean` |
| `t` (no SerializedName) | `boolean` |
| `u` (no SerializedName) | `Leki;` |
| `v` (no SerializedName) | `int` |
| `w` (no SerializedName) | `boolean` |
| `x` (no SerializedName) | `boolean` |
| `y` (no SerializedName) | `int` |
| `z` (no SerializedName) | `string` |

### `ServiceClientConfigurationData`

`com.kkstr.bundesliga.data.model.ServiceClientConfigurationData`

| JSON | Java type |
| --- | --- |
| `sk` | `string` |
| `sut` | `string` |

### `SocialHubManager`

`com.kkstr.bundesliga.data.model.SocialHubManager`

| JSON | Java type |
| --- | --- |
| `dvim` | `string` |
| `ui` | `string` |
| `isvf` | `boolean` |
| `ipic` | `boolean` |
| `unm` | `string` |
| `skp` | `int` |
| `uim` | `string` |

### `SortingBadge`

`com.kkstr.bundesliga.data.model.SortingBadge`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `int` |
| `e` (no SerializedName) | `boolean` |

### `SortingOption`

`com.kkstr.bundesliga.data.model.SortingOption`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `int` |
| `e` (no SerializedName) | `SortingBadge` |

### `SpDistributionBracket`

`com.kkstr.bundesliga.data.model.SpDistributionBracket`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `int` |

### `SpDistributionData`

`com.kkstr.bundesliga.data.model.SpDistributionData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `list` |

### `SponsorLogoAd`

`com.kkstr.bundesliga.data.model.SponsorLogoAd`

| JSON | Java type |
| --- | --- |
| `durl` | `string` |
| `i` | `string` |
| `lf` | `string` |
| `url` | `string` |

### `SquadOnboardingTutorialData`

`com.kkstr.bundesliga.data.model.SquadOnboardingTutorialData`

| JSON | Java type |
| --- | --- |
| `fsu` | `string` |
| `ssu` | `string` |
| `tsu` | `string` |

### `SquadPlayer`

`com.kkstr.bundesliga.data.model.SquadPlayer`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `pi` | `string` |
| `iotm` | `boolean` |
| `mv` | `long` |
| `mvgl` | `long` |
| `mvt` | `int` |
| `pn` | `string` |
| `ofc` | `int` |
| `lo` | `int` |
| `pim` | `string` |
| `pos` | `int` |
| `prc` | `long` |
| `sdmvt` | `long` |
| `prob` | `int` |
| `st` | `int` |
| `lst` | `int` |
| `stl` | `list` |
| `tid` | `int` |
| `p` | `int` |
| `tfhmvt` | `long` |

### `StageData`

`com.kkstr.bundesliga.data.model.StageData`

| JSON | Java type |
| --- | --- |
| `dt` | `string` |
| `dv` | `DivisionRankingData` |
| `lb` | `string` |
| `ci` | `string` |
| `i` | `string` |
| `ti` | `string` |
| `url` | `string` |
| `u` | `UserBasicData` |

### `StartingElevenPredictionData`

`com.kkstr.bundesliga.data.model.StartingElevenPredictionData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |

### `SubscriptionStatusData`

`com.kkstr.bundesliga.data.model.SubscriptionStatusData`

| JSON | Java type |
| --- | --- |
| `exd` | `string` |
| `prms` | `int` |

### `SucceedingChallengeData`

`com.kkstr.bundesliga.data.model.SucceedingChallengeData`

| JSON | Java type |
| --- | --- |
| `chim` | `string` |
| `ch` | `string` |
| `dt` | `string` |
| `cht` | `int` |

### `SucceedingChallengesScreenData`

`com.kkstr.bundesliga.data.model.SucceedingChallengesScreenData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `string` |
| `c` (no SerializedName) | `string` |
| `d` (no SerializedName) | `long` |
| `e` (no SerializedName) | `int` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `int` |
| `h` (no SerializedName) | `int` |

### `SuggestionChallengeData`

`com.kkstr.bundesliga.data.model.SuggestionChallengeData`

| JSON | Java type |
| --- | --- |
| `ch` | `string` |
| `chim` | `string` |
| `chn` | `string` |

### `TeamCenterPlayer`

`com.kkstr.bundesliga.data.model.TeamCenterPlayer`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `boolean` |
| `b` (no SerializedName) | `boolean` |
| `bos` | `LivePitchBoost` |
| `c` (no SerializedName) | `long` |
| `d` (no SerializedName) | `int` |
| `e` (no SerializedName) | `boolean` |
| `f` (no SerializedName) | `int` |
| `g` (no SerializedName) | `int` |
| `h` (no SerializedName) | `boolean` |
| `i` (no SerializedName) | `int` |
| `i` | `string` |
| `ictp` | `boolean` |
| `perl` | `boolean` |
| `il` | `boolean` |
| `k` | `list` |
| `lo` | `int` |
| `mc` | `int` |
| `md` | `string` |
| `mi` | `string` |
| `mt` | `int` |
| `mtd` | `string` |
| `mst` | `int` |
| `n` | `string` |
| `ot` | `OpponentTeamData` |
| `ots` | `list` |
| `pim` | `string` |
| `st` | `int` |
| `p` | `long` |
| `pos` | `int` |
| `tid` | `string` |

### `TeamPlayerCounts`

`com.kkstr.bundesliga.data.model.TeamPlayerCounts`

| JSON | Java type |
| --- | --- |
| `npt` | `int` |
| `tid` | `string` |

### `TransferUndoItemData`

`com.kkstr.bundesliga.data.model.TransferUndoItemData`

| JSON | Java type |
| --- | --- |
| `dt` | `string` |
| `err` | `int` |
| `othi` | `string` |
| `othim` | `string` |
| `othnm` | `string` |
| `pi` | `string` |
| `pim` | `string` |
| `pn` | `string` |
| `tri` | `string` |
| `trp` | `long` |
| `tty` | `int` |
| `ui` | `string` |
| `uim` | `string` |
| `unm` | `string` |

### `TrialData`

`com.kkstr.bundesliga.data.model.TrialData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `boolean` |
| `c` (no SerializedName) | `int` |
| `d` (no SerializedName) | `string` |

### `UserAccount`

`com.kkstr.bundesliga.data.model.UserAccount`

| JSON | Java type |
| --- | --- |
| `apid` | `string` |
| `em` | `string` |
| `fbid` | `string` |
| `goid` | `string` |
| `i` | `string` |
| `uim` | `string` |
| `unm` | `string` |

### `UserBasicData`

`com.kkstr.bundesliga.data.model.UserBasicData`

| JSON | Java type |
| --- | --- |
| `ui` | `string` |
| `uim` | `string` |
| `unm` | `string` |

### `UserCompetitionPermission`

`com.kkstr.bundesliga.data.model.UserCompetitionPermission`

| JSON | Java type |
| --- | --- |
| `cpi` | `string` |
| `prms` | `list` |

### `VersusChallengeData`

`com.kkstr.bundesliga.data.model.VersusChallengeData`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `list` |

### `VersusChallengeStatistic`

`com.kkstr.bundesliga.data.model.VersusChallengeStatistic`

| JSON | Java type |
| --- | --- |
| `ti` | `string` |
| `v` | `long` |

### `VersusChallengeTeam`

`com.kkstr.bundesliga.data.model.VersusChallengeTeam`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `boolean` |
| `gurl` | `string` |
| `i` | `string` |
| `ti` | `string` |

### `ChallengeLineupDetailData`

`com.kkstr.bundesliga.data.model.challengeLineup.ChallengeLineupDetailData`

| JSON | Java type |
| --- | --- |
| `lt` | `list` |
| `biu` | `string` |
| `burl` | `string` |
| `boe` | `boolean` |
| `boiu` | `string` |
| `bss` | `boolean` |
| `cpte` | `boolean` |
| `cpi` | `string` |
| `t` | `string` |
| `onbft` | `string` |
| `li` | `string` |
| `lp` | `list` |
| `lpc` | `int` |
| `lis` | `string` |
| `plpim` | `string` |
| `plpt` | `string` |
| `b` | `long` |
| `clpc` | `int` |
| `mdln` | `string` |
| `ua` | `string` |

### `ChallengeSquadPlayerData`

`com.kkstr.bundesliga.data.model.challengeLineup.ChallengeSquadPlayerData`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `b` (no SerializedName) | `boolean` |
| `ictp` | `boolean` |
| `if` | `boolean` |
| `lo` | `int` |
| `lst` | `int` |
| `mv` | `long` |
| `mc` | `int` |
| `mdst` | `int` |
| `mi` | `string` |
| `ots` | `list` |
| `pi` | `string` |
| `pim` | `string` |
| `n` | `string` |
| `pos` | `int` |
| `prob` | `int` |
| `st` | `int` |
| `t1` | `string` |
| `t2` | `string` |
| `tid` | `string` |
| `t1im` | `string` |
| `t2im` | `string` |

### `LineupPick`

`com.kkstr.bundesliga.data.model.challengeLineup.LineupPick`

| JSON | Java type |
| --- | --- |
| `b` (no SerializedName) | `int` |
| `c` (no SerializedName) | `SquadPlayerSelectionData` |

### `SquadPlayerSelectionData`

`com.kkstr.bundesliga.data.model.challengeLineup.SquadPlayerSelectionData`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `b` (no SerializedName) | `boolean` |
| `dis` | `boolean` |
| `ictp` | `boolean` |
| `if` | `boolean` |
| `mv` | `long` |
| `mc` | `int` |
| `mdst` | `int` |
| `mpst` | `int` |
| `ots` | `list` |
| `pi` | `string` |
| `pim` | `string` |
| `n` | `string` |
| `pos` | `int` |
| `prob` | `int` |
| `st` | `int` |
| `t1` | `string` |
| `t2` | `string` |
| `tid` | `string` |
| `t1im` | `string` |
| `t2im` | `string` |
| `tp` | `int` |

## request

### `AdPlacementTrackingRequest`

`com.kkstr.bundesliga.data.request.AdPlacementTrackingRequest`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `eti` | `int` |

### `AddFavoriteRequest`

`com.kkstr.bundesliga.data.request.AddFavoriteRequest`

| JSON | Java type |
| --- | --- |
| `ui` | `string` |

### `AdminSettingsAdjustmentRequest`

`com.kkstr.bundesliga.data.request.AdminSettingsAdjustmentRequest`

| JSON | Java type |
| --- | --- |
| `adt` | `int` |
| `t` | `int` |
| `amt` | `long` |
| `comm` | `string` |
| `ui` | `string` |

### `AssignAdminRequest`

`com.kkstr.bundesliga.data.request.AssignAdminRequest`

| JSON | Java type |
| --- | --- |
| `ui` | `string` |

### `ChallengeSelectionRequest`

`com.kkstr.bundesliga.data.request.ChallengeSelectionRequest`

| JSON | Java type |
| --- | --- |
| `lud` | `LineupAutoFillRequest` |
| `pi` | `string` |
| `gid` | `string` |

### `ChallengeSetNewLineupPlayersRequest`

`com.kkstr.bundesliga.data.request.ChallengeSetNewLineupPlayersRequest`

| JSON | Java type |
| --- | --- |
| `cpti` | `string` |
| `type` | `string` |
| `players` | `list` |

### `CheckEmailV4Request`

`com.kkstr.bundesliga.data.request.CheckEmailV4Request`

| JSON | Java type |
| --- | --- |
| `em` | `string` |

### `CreateNewLeagueRequest`

`com.kkstr.bundesliga.data.request.CreateNewLeagueRequest`

| JSON | Java type |
| --- | --- |
| `amd` | `boolean` |
| `rsn` | `int` |
| `b` | `long` |
| `cpte` | `boolean` |
| `cpi` | `string` |
| `d` | `string` |
| `gpm` | `int` |
| `isp` | `boolean` |
| `lpc` | `int` |
| `mdct` | `int` |
| `lnm` | `string` |
| `mpst` | `int` |
| `ptspf` | `int` |
| `rnkm` | `int` |
| `mppu` | `int` |
| `sst` | `int` |
| `upe` | `boolean` |

### `EditPasswordRequest`

`com.kkstr.bundesliga.data.request.EditPasswordRequest`

| JSON | Java type |
| --- | --- |
| `npass` | `string` |
| `pass` | `string` |

### `EmailOptInRequest`

`com.kkstr.bundesliga.data.request.EmailOptInRequest`

| JSON | Java type |
| --- | --- |
| `ctxt` | `string` |
| `ctp` | `int` |

### `FCMTokenRequest`

`com.kkstr.bundesliga.data.request.FCMTokenRequest`

| JSON | Java type |
| --- | --- |
| `n` | `string` |
| `conn` | `string` |
| `t` | `int` |

### `ForgotPasswordV4Request`

`com.kkstr.bundesliga.data.request.ForgotPasswordV4Request`

| JSON | Java type |
| --- | --- |
| `em` | `string` |

### `JoinChallengesRequest`

`com.kkstr.bundesliga.data.request.JoinChallengesRequest`

| JSON | Java type |
| --- | --- |
| `cis` | `list` |

### `LineUpFormationRequest`

`com.kkstr.bundesliga.data.request.LineUpFormationRequest`

| JSON | Java type |
| --- | --- |
| `players` | `list` |
| `type` | `string` |

### `LineupAutoFillRequest`

`com.kkstr.bundesliga.data.request.LineupAutoFillRequest`

| JSON | Java type |
| --- | --- |
| `lt` | `string` |
| `pls` | `list` |

### `LoginAuth0Request`

`com.kkstr.bundesliga.data.request.LoginAuth0Request`

| JSON | Java type |
| --- | --- |
| `au0tkn` | `string` |
| `loy` | `boolean` |
| `tkn` | `string` |

### `LoginFacebookRequest`

`com.kkstr.bundesliga.data.request.LoginFacebookRequest`

| JSON | Java type |
| --- | --- |
| `fbtkn` | `string` |
| `rep` | `Lcom/google/gson/JsonObject;` |

### `LoginGoogleRequest`

`com.kkstr.bundesliga.data.request.LoginGoogleRequest`

| JSON | Java type |
| --- | --- |
| `gotkn` | `string` |
| `rep` | `Lcom/google/gson/JsonObject;` |

### `LoginUserRequest`

`com.kkstr.bundesliga.data.request.LoginUserRequest`

| JSON | Java type |
| --- | --- |
| `pass` | `string` |
| `em` | `string` |

### `MatchVoteRequest`

`com.kkstr.bundesliga.data.request.MatchVoteRequest`

| JSON | Java type |
| --- | --- |
| `c` | `int` |

### `PlaceAnOfferRequest`

`com.kkstr.bundesliga.data.request.PlaceAnOfferRequest`

| JSON | Java type |
| --- | --- |
| `price` | `double` |

### `RefreshTokenRequest`

`com.kkstr.bundesliga.data.request.RefreshTokenRequest`

| JSON | Java type |
| --- | --- |
| `rtkn` | `string` |

### `RegisterUserV4Request`

`com.kkstr.bundesliga.data.request.RegisterUserV4Request`

| JSON | Java type |
| --- | --- |
| `arc` | `boolean` |
| `ctxt` | `string` |
| `em` | `string` |
| `pass` | `string` |
| `rek` | `boolean` |
| `rept` | `boolean` |
| `rep` | `Lcom/google/gson/JsonObject;` |
| `tkn` | `string` |
| `unm` | `string` |

### `ResetRequest`

`com.kkstr.bundesliga.data.request.ResetRequest`

| JSON | Java type |
| --- | --- |
| `b` | `long` |
| `lpc` | `int` |
| `mdct` | `int` |
| `mode` | `int` |
| `rnkm` | `int` |

### `SaveLeagueAdminSettingsRequest`

`com.kkstr.bundesliga.data.request.SaveLeagueAdminSettingsRequest`

| JSON | Java type |
| --- | --- |
| `amd` | `boolean` |
| `rsn` | `int` |
| `cpte` | `boolean` |
| `d` | `string` |
| `gpm` | `int` |
| `isp` | `boolean` |
| `mdct` | `int` |
| `lnm` | `string` |
| `mpst` | `int` |
| `ptspf` | `int` |
| `mppu` | `int` |
| `upe` | `boolean` |

### `SaveLineUpRequest`

`com.kkstr.bundesliga.data.request.SaveLineUpRequest`

| JSON | Java type |
| --- | --- |
| `players` | `list` |
| `type` | `string` |

### `SelectBoostRequest`

`com.kkstr.bundesliga.data.request.SelectBoostRequest`

| JSON | Java type |
| --- | --- |
| `boi` | `string` |

### `SendLeagueActivityCommentRequest`

`com.kkstr.bundesliga.data.request.SendLeagueActivityCommentRequest`

| JSON | Java type |
| --- | --- |
| `comm` | `string` |

### `SendVerificationRequest`

`com.kkstr.bundesliga.data.request.SendVerificationRequest`

| JSON | Java type |
| --- | --- |
| `ctxt` | `string` |
| `ctp` | `int` |
| `emoi` | `boolean` |

### `SetTargetPriceRequest`

`com.kkstr.bundesliga.data.request.SetTargetPriceRequest`

| JSON | Java type |
| --- | --- |
| `pi` | `string` |
| `prc` | `double` |

### `UpdateAccountSettingsRequest`

`com.kkstr.bundesliga.data.request.UpdateAccountSettingsRequest`

| JSON | Java type |
| --- | --- |
| `em` | `string` |
| `unm` | `string` |

### `UpdateEmailRequest`

`com.kkstr.bundesliga.data.request.UpdateEmailRequest`

| JSON | Java type |
| --- | --- |
| `em` | `string` |

### `UserTrackingRequest`

`com.kkstr.bundesliga.data.request.UserTrackingRequest`

| JSON | Java type |
| --- | --- |
| `tys` | `list` |

### `ValidatePurchaseRequest`

`com.kkstr.bundesliga.data.request.ValidatePurchaseRequest`

| JSON | Java type |
| --- | --- |
| `rct` | `string` |
| `stot` | `int` |

### `VerifyEmailRequest`

`com.kkstr.bundesliga.data.request.VerifyEmailRequest`

| JSON | Java type |
| --- | --- |
| `tkn` | `string` |

## response

### `AccountSettingsOverviewResponse`

`com.kkstr.bundesliga.data.response.AccountSettingsOverviewResponse`

| JSON | Java type |
| --- | --- |
| `u` | `UserAccount` |

### `AchievementsResponse`

`com.kkstr.bundesliga.data.response.AchievementsResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `AdConfigurationData`

`com.kkstr.bundesliga.data.response.AdConfigurationData`

| JSON | Java type |
| --- | --- |
| `k` | `list` |
| `t` | `long` |

### `AdminSettingsHistoryResponse`

`com.kkstr.bundesliga.data.response.AdminSettingsHistoryResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `AllCompetitionsResponse`

`com.kkstr.bundesliga.data.response.AllCompetitionsResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `AnnouncedLineupPlayer`

`com.kkstr.bundesliga.data.response.AnnouncedLineupPlayer`

| JSON | Java type |
| --- | --- |
| `i` | `int` |
| `pim` | `string` |
| `n` | `string` |
| `pos` | `int` |

### `AppVersionResponse`

`com.kkstr.bundesliga.data.response.AppVersionResponse`

| JSON | Java type |
| --- | --- |
| `vrv` | `boolean` |
| `fb` | `string` |
| `enf` | `EnabledFeaturesData` |
| `ibp` | `string` |
| `gai` | `boolean` |

### `ArenaClubsListResponse`

`com.kkstr.bundesliga.data.response.ArenaClubsListResponse`

| JSON | Java type |
| --- | --- |
| `tms` | `list` |

### `ArenaRankingFavoritesResponse`

`com.kkstr.bundesliga.data.response.ArenaRankingFavoritesResponse`

| JSON | Java type |
| --- | --- |
| `day` | `int` |
| `ia` | `boolean` |
| `us` | `list` |

### `ArenaRankingManagerItem`

`com.kkstr.bundesliga.data.response.ArenaRankingManagerItem`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `cur` | `boolean` |
| `ifa` | `boolean` |
| `isvf` | `boolean` |
| `n` | `string` |
| `pl` | `int` |
| `p` | `int` |
| `swc` | `int` |
| `uim` | `string` |

### `ArenaRankingSearchResponse`

`com.kkstr.bundesliga.data.response.ArenaRankingSearchResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `si` | `int` |
| `tc` | `int` |

### `ArenaRankingTopResponse`

`com.kkstr.bundesliga.data.response.ArenaRankingTopResponse`

| JSON | Java type |
| --- | --- |
| `day` | `int` |
| `ia` | `boolean` |
| `tom` | `list` |
| `uc` | `int` |

### `Auth0Configuration`

`com.kkstr.bundesliga.data.response.Auth0Configuration`

| JSON | Java type |
| --- | --- |
| `cli` | `string` |
| `dom` | `string` |

### `BaseStageResponse`

`com.kkstr.bundesliga.data.response.BaseStageResponse`

| JSON | Java type |
| --- | --- |
| `cps` | `list` |
| `onbspu` | `string` |
| `stg` | `list` |

### `BaseStartingElevenResponse`

`com.kkstr.bundesliga.data.response.BaseStartingElevenResponse`

| JSON | Java type |
| --- | --- |
| `tms` | `list` |

### `BettingPartnerAdResponse`

`com.kkstr.bundesliga.data.response.BettingPartnerAdResponse`

| JSON | Java type |
| --- | --- |
| `betp` | `BettingPartnerAd` |

### `BoostEventResponse`

`com.kkstr.bundesliga.data.response.BoostEventResponse`

| JSON | Java type |
| --- | --- |
| `btp` | `int` |
| `p` | `int` |
| `k` | `int` |
| `ti` | `string` |

### `BoostInfoResponse`

`com.kkstr.bundesliga.data.response.BoostInfoResponse`

| JSON | Java type |
| --- | --- |
| `acol` | `string` |
| `boi` | `string` |
| `d` | `string` |
| `events` | `list` |
| `f` | `string` |
| `ti` | `string` |

### `BoostResponse`

`com.kkstr.bundesliga.data.response.BoostResponse`

| JSON | Java type |
| --- | --- |
| `acol` | `string` |
| `boi` | `string` |
| `d` | `string` |
| `f` | `string` |
| `ti` | `string` |

### `BudgetResponse`

`com.kkstr.bundesliga.data.response.BudgetResponse`

| JSON | Java type |
| --- | --- |
| `spr` | `SponsorLogoAd` |
| `bs` | `int` |
| `b` | `double` |
| `pbaa` | `double` |
| `pbas` | `double` |

### `ChallengeFavoriteManagersResponse`

`com.kkstr.bundesliga.data.response.ChallengeFavoriteManagersResponse`

| JSON | Java type |
| --- | --- |
| `day` | `int` |
| `esp` | `int` |
| `ia` | `boolean` |
| `it` | `list` |

### `ChallengeLobbyArchiveResponse`

`com.kkstr.bundesliga.data.response.ChallengeLobbyArchiveResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `ChallengeLobbyExploreResponse`

`com.kkstr.bundesliga.data.response.ChallengeLobbyExploreResponse`

| JSON | Java type |
| --- | --- |
| `cps` | `list` |
| `chl` | `list` |
| `rm` | `list` |
| `slg` | `list` |
| `spo` | `list` |

### `ChallengeLobbyProfileResponse`

`com.kkstr.bundesliga.data.response.ChallengeLobbyProfileResponse`

| JSON | Java type |
| --- | --- |
| `cyh` | `list` |
| `dv` | `DivisionRankingData` |
| `u` | `UserBasicData` |
| `chc` | `int` |
| `n` | `string` |
| `ed` | `string` |
| `sd` | `string` |
| `ap` | `int` |
| `avskp` | `int` |
| `skp` | `int` |

### `ChallengeLobbyResponse`

`com.kkstr.bundesliga.data.response.ChallengeLobbyResponse`

| JSON | Java type |
| --- | --- |
| `dse` | `string` |
| `esfu` | `list` |
| `eci` | `string` |
| `exp` | `list` |
| `exst` | `ChallengeExploreData` |
| `hach` | `boolean` |
| `skps` | `boolean` |
| `my` | `list` |
| `it` | `list` |
| `perfb` | `string` |
| `promo` | `RushPromotionResponse` |
| `stg` | `StageData` |
| `sch` | `SuggestionChallengeData` |
| `ss` | `int` |

### `ChallengeLobbySkillPointsSummaryResponse`

`com.kkstr.bundesliga.data.response.ChallengeLobbySkillPointsSummaryResponse`

| JSON | Java type |
| --- | --- |
| `cps` | `list` |
| `chs` | `list` |
| `cn` | `int` |
| `dvs` | `list` |
| `ed` | `string` |
| `pcps` | `list` |
| `pskp` | `int` |
| `sptr` | `int` |
| `sd` | `string` |
| `scl` | `list` |
| `dvi` | `string` |
| `pdvi` | `string` |
| `skp` | `int` |
| `wn` | `int` |
| `dt` | `string` |

### `ChallengeManagerProfileResponse`

`com.kkstr.bundesliga.data.response.ChallengeManagerProfileResponse`

| JSON | Java type |
| --- | --- |
| `fp` | `list` |
| `li` | `string` |
| `u` | `ChallengeManager` |
| `t` | `int` |
| `ifa` | `boolean` |
| `il` | `boolean` |
| `lp` | `list` |
| `mds` | `list` |
| `pl` | `long` |
| `p` | `long` |

### `ChallengeMatchDayPerformanceResponse`

`com.kkstr.bundesliga.data.response.ChallengeMatchDayPerformanceResponse`

| JSON | Java type |
| --- | --- |
| `li` | `string` |
| `u` | `ChallengeManager` |
| `ispd` | `boolean` |
| `lp` | `list` |
| `clpc` | `int` |
| `perfp` | `int` |
| `pl` | `long` |
| `p` | `long` |
| `top` | `float` |
| `skp` | `int` |

### `ChallengeMatchDayRankingResponse`

`com.kkstr.bundesliga.data.response.ChallengeMatchDayRankingResponse`

| JSON | Java type |
| --- | --- |
| `li` | `string` |
| `chn` | `string` |
| `fm` | `list` |
| `fp` | `list` |
| `tom` | `list` |
| `skp` | `int` |
| `top` | `float` |

### `ChallengeOverviewResponse`

`com.kkstr.bundesliga.data.response.ChallengeOverviewResponse`

| JSON | Java type |
| --- | --- |
| `li` | `string` |
| `u` | `ChallengeManager` |
| `ndc` | `int` |
| `mds` | `list` |
| `pl` | `long` |
| `p` | `long` |
| `gi` | `list` |

### `ChallengeProfileResponse`

`com.kkstr.bundesliga.data.response.ChallengeProfileResponse`

| JSON | Java type |
| --- | --- |
| `fb` | `string` |
| `ch` | `string` |
| `chim` | `string` |
| `cpi` | `string` |
| `cpim` | `string` |
| `d` | `string` |
| `usfp` | `list` |
| `iatl` | `boolean` |
| `mds` | `list` |
| `n` | `string` |
| `fo` | `string` |
| `uc` | `int` |
| `pz` | `list` |
| `ruls` | `ChallengeProfileRulesData` |
| `g1fb` | `string` |
| `g2fb` | `string` |
| `terms` | `string` |
| `ft` | `string` |
| `uj` | `boolean` |
| `gi` | `list` |

### `ChallengeSearchManagersResponse`

`com.kkstr.bundesliga.data.response.ChallengeSearchManagersResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `si` | `int` |
| `tc` | `int` |

### `ChallengeTopElevenPlayersResponse`

`com.kkstr.bundesliga.data.response.ChallengeTopElevenPlayersResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `ChallengeTrainingGroundConfigResponse`

`com.kkstr.bundesliga.data.response.ChallengeTrainingGroundConfigResponse`

| JSON | Java type |
| --- | --- |
| `chot` | `ChallengeOnboardingTutorialData` |
| `onblmd` | `string` |
| `sobt` | `SquadOnboardingTutorialData` |

### `ChallengeTrainingGroundResponse`

`com.kkstr.bundesliga.data.response.ChallengeTrainingGroundResponse`

| JSON | Java type |
| --- | --- |
| `avp` | `list` |
| `b` | `long` |
| `ch` | `string` |
| `trp1` | `string` |
| `clpc` | `int` |
| `lis` | `string` |
| `usfp` | `list` |
| `trp2` | `string` |

### `ChallengeTrainingGroundTrialResponse`

`com.kkstr.bundesliga.data.response.ChallengeTrainingGroundTrialResponse`

| JSON | Java type |
| --- | --- |
| `bnf` | `list` |
| `trd` | `int` |

### `ChatLeagueUserResponse`

`com.kkstr.bundesliga.data.response.ChatLeagueUserResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `ChatLeaguesResponse`

`com.kkstr.bundesliga.data.response.ChatLeaguesResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `CheckEmailResponseV4`

`com.kkstr.bundesliga.data.response.CheckEmailResponseV4`

| JSON | Java type |
| --- | --- |
| `exists` | `boolean` |

### `ClubCenterResponse`

`com.kkstr.bundesliga.data.response.ClubCenterResponse`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `int` |
| `tpm` | `list` |
| `b` (no SerializedName) | `int` |
| `it` | `list` |
| `ma` | `ClubMatch` |
| `pl` | `int` |
| `p` | `int` |
| `tid` | `string` |
| `tim` | `string` |
| `tn` | `string` |

### `ClubsListResponse`

`com.kkstr.bundesliga.data.response.ClubsListResponse`

| JSON | Java type |
| --- | --- |
| `chte` | `list` |
| `tms` | `list` |

### `CompetitionFixturesResponse`

`com.kkstr.bundesliga.data.response.CompetitionFixturesResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `day` | `int` |
| `mdln` | `string` |

### `CompetitionSearchResponse`

`com.kkstr.bundesliga.data.response.CompetitionSearchResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `CompetitionTableRankingResponse`

`com.kkstr.bundesliga.data.response.CompetitionTableRankingResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `CompetitionTableResponse`

`com.kkstr.bundesliga.data.response.CompetitionTableResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `conf` | `list` |
| `hss` | `boolean` |
| `sbrt` | `string` |

### `CompetitionTopPlayersResponse`

`com.kkstr.bundesliga.data.response.CompetitionTopPlayersResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `day` | `int` |
| `mdsn` | `string` |
| `nsn` | `string` |
| `nss` | `string` |
| `sn` | `string` |
| `spr` | `SponsorLogoAd` |

### `CreateNewLeagueResponse`

`com.kkstr.bundesliga.data.response.CreateNewLeagueResponse`

| JSON | Java type |
| --- | --- |
| `b` | `long` |
| `err` | `int` |
| `errMsg` | `string` |
| `li` | `string` |
| `pld` | `LeagueAdditionalData` |
| `pls` | `list` |
| `tv` | `long` |

### `CycleHistoryItemResponse`

`com.kkstr.bundesliga.data.response.CycleHistoryItemResponse`

| JSON | Java type |
| --- | --- |
| `cyi` | `string` |
| `n` | `string` |
| `fdi` | `string` |
| `fdn` | `string` |
| `sti` | `string` |

### `DailyBonusCollectionResponse`

`com.kkstr.bundesliga.data.response.DailyBonusCollectionResponse`

| JSON | Java type |
| --- | --- |
| `bstc` | `string` |
| `btc` | `string` |
| `dtc` | `string` |
| `it` | `list` |
| `fb` | `string` |
| `btt` | `string` |
| `lf` | `string` |
| `url` | `string` |

### `EmailOptInResponse`

`com.kkstr.bundesliga.data.response.EmailOptInResponse`

| JSON | Java type |
| --- | --- |
| `rslt` | `int` |

### `EmptyResponse`

`com.kkstr.bundesliga.data.response.EmptyResponse`

| JSON | Java type |
| --- | --- |
| `err` | `int` |
| `errMsg` | `string` |
| `pld` | `LeagueAdditionalData` |

### `GameLeaguesListResponse`

`com.kkstr.bundesliga.data.response.GameLeaguesListResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `rml` | `list` |

### `GeneralErrorResponse`

`com.kkstr.bundesliga.data.response.GeneralErrorResponse`

| JSON | Java type |
| --- | --- |
| `fb` | `string` |
| `err` | `int` |
| `errMsg` | `string` |

### `GeneralInfoResponse`

`com.kkstr.bundesliga.data.response.GeneralInfoResponse`

| JSON | Java type |
| --- | --- |
| `actp` | `boolean` |
| `ad` | `AdConfigurationData` |
| `auc` | `list` |
| `ic` | `list` |
| `chivurl` | `string` |
| `cps` | `list` |
| `cpi` | `string` |
| `enf` | `EnabledFeaturesData` |
| `err` | `int` |
| `errMsg` | `string` |
| `fc` | `list` |
| `h2hec` | `list` |
| `ibp` | `string` |
| `icu` | `string` |
| `isfe` | `boolean` |
| `lcud` | `string` |
| `lgivurl` | `string` |
| `lie` | `string` |
| `lis` | `string` |
| `lopts` | `list` |
| `meb` | `string` |
| `mia` | `int` |
| `nsc` | `list` |
| `ruivurl` | `string` |
| `rsc` | `ServiceClientConfigurationData` |
| `sarm` | `boolean` |
| `sobt` | `SquadOnboardingTutorialData` |
| `ts` | `long` |
| `dapurl` | `string` |
| `disurl` | `string` |
| `fburl` | `string` |
| `insturl` | `string` |
| `pturl` | `string` |
| `rurl` | `string` |
| `spurl` | `string` |
| `surl` | `string` |
| `terms` | `string` |
| `tuturl` | `string` |
| `twitchurl` | `string` |
| `twitterurl` | `string` |
| `ytburl` | `string` |

### `GetChallengeBoostInfosResponse`

`com.kkstr.bundesliga.data.response.GetChallengeBoostInfosResponse`

| JSON | Java type |
| --- | --- |
| `bos` | `list` |

### `GetChallengeBoostsResponse`

`com.kkstr.bundesliga.data.response.GetChallengeBoostsResponse`

| JSON | Java type |
| --- | --- |
| `bos` | `list` |
| `sboi` | `string` |

### `IndicatorItem`

`com.kkstr.bundesliga.data.response.IndicatorItem`

| JSON | Java type |
| --- | --- |
| `t` | `int` |

### `IndicatorsResponse`

`com.kkstr.bundesliga.data.response.IndicatorsResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `InviteFriendsCodeResponse`

`com.kkstr.bundesliga.data.response.InviteFriendsCodeResponse`

| JSON | Java type |
| --- | --- |
| `cod` | `string` |

### `JoinChallengeResponse`

`com.kkstr.bundesliga.data.response.JoinChallengeResponse`

| JSON | Java type |
| --- | --- |
| `chl` | `ChallengeData` |

### `JoinLeagueErrorResponse`

`com.kkstr.bundesliga.data.response.JoinLeagueErrorResponse`

| JSON | Java type |
| --- | --- |
| `err` | `int` |
| `errMsg` | `string` |
| `pld` | `LeagueAdditionalData` |

### `JoinLeagueResponse`

`com.kkstr.bundesliga.data.response.JoinLeagueResponse`

| JSON | Java type |
| --- | --- |
| `b` | `long` |
| `err` | `int` |
| `errMsg` | `string` |
| `li` | `string` |
| `pld` | `LeagueAdditionalData` |
| `pls` | `list` |
| `tv` | `long` |

### `LeagueActivitiesActivityDetailsResponse`

`com.kkstr.bundesliga.data.response.LeagueActivitiesActivityDetailsResponse`

| JSON | Java type |
| --- | --- |
| `data` | `ActivityFeedItemDetailsData` |
| `dt` | `string` |
| `t` | `int` |

### `LeagueActivitiesResponse`

`com.kkstr.bundesliga.data.response.LeagueActivitiesResponse`

| JSON | Java type |
| --- | --- |
| `af` | `list` |
| `onbft` | `string` |
| `mdc` | `MatchDayCountdownResponse` |
| `mdsh` | `LeagueActivityItemData` |
| `sc` | `SeasonCompleteResponse` |

### `LeagueActivityCommentsResponse`

`com.kkstr.bundesliga.data.response.LeagueActivityCommentsResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `coc` | `int` |

### `LeagueAdditionalData`

`com.kkstr.bundesliga.data.response.LeagueAdditionalData`

| JSON | Java type |
| --- | --- |
| `am` | `list` |
| `anol` | `int` |
| `ibun` | `string` |
| `ispb` | `boolean` |
| `li` | `string` |
| `lim` | `string` |
| `lnm` | `string` |
| `uas` | `string` |

### `LeagueOverviewResponse`

`com.kkstr.bundesliga.data.response.LeagueOverviewResponse`

| JSON | Java type |
| --- | --- |
| `amd` | `boolean` |
| `rsn` | `int` |
| `btls` | `list` |
| `cpte` | `boolean` |
| `cpi` | `string` |
| `cpim` | `string` |
| `cpn` | `string` |
| `m` | `list` |
| `gpm` | `int` |
| `hum` | `boolean` |
| `adm` | `boolean` |
| `isp` | `boolean` |
| `isr` | `boolean` |
| `ism` | `boolean` |
| `isvf` | `boolean` |
| `d` | `string` |
| `i` | `string` |
| `leagueImageUrl` (no SerializedName) | `string` |
| `lnm` | `string` |
| `dt` | `string` |
| `clpc` | `int` |
| `mgc` | `int` |
| `us` | `list` |
| `mdct` | `int` |
| `mpst` | `int` |
| `mppu` | `int` |
| `mgm` | `int` |
| `ptspf` | `int` |
| `rnkm` | `int` |
| `b` | `double` |
| `sst` | `int` |
| `upe` | `boolean` |

### `LeagueRankingResponse`

`com.kkstr.bundesliga.data.response.LeagueRankingResponse`

| JSON | Java type |
| --- | --- |
| `cpi` | `string` |
| `clpc` | `int` |
| `day` | `int` |
| `gpm` | `int` |
| `ia` | `boolean` |
| `il` | `boolean` |
| `ish` | `boolean` |
| `lfmd` | `int` |
| `ti` | `string` |
| `nd` | `int` |
| `nsi` | `string` |
| `nsn` | `string` |
| `nss` | `string` |
| `sn` | `string` |
| `shmdn` | `int` |
| `us` | `list` |

### `LeagueSettingsResponse`

`com.kkstr.bundesliga.data.response.LeagueSettingsResponse`

| JSON | Java type |
| --- | --- |
| `rsn` | `int` |
| `b` | `long` |
| `cpte` | `boolean` |
| `gpm` | `int` |
| `amd` | `boolean` |
| `isp` | `boolean` |
| `d` | `string` |
| `i` | `string` |
| `lim` | `string` |
| `lnm` | `string` |
| `mdct` | `int` |
| `mpst` | `int` |
| `mppu` | `int` |
| `ptspf` | `int` |
| `rnkm` | `int` |
| `upe` | `boolean` |

### `LineupAutoFillResponse`

`com.kkstr.bundesliga.data.response.LineupAutoFillResponse`

| JSON | Java type |
| --- | --- |
| `cpti` | `string` |
| `lt` | `string` |
| `pls` | `list` |

### `LineupFilterClubResponse`

`com.kkstr.bundesliga.data.response.LineupFilterClubResponse`

| JSON | Java type |
| --- | --- |
| `pl` | `int` |
| `sym` | `string` |
| `tid` | `string` |
| `tim` | `string` |

### `LineupFiltersResponse`

`com.kkstr.bundesliga.data.response.LineupFiltersResponse`

| JSON | Java type |
| --- | --- |
| `flt` | `list` |
| `clubs` (no SerializedName) | `list` |
| `mvx` | `long` |

### `LiveEventTypeDescriptionResponse`

`com.kkstr.bundesliga.data.response.LiveEventTypeDescriptionResponse`

| JSON | Java type |
| --- | --- |
| `d` | `string` |
| `i` | `int` |

### `LiveEventTypesResponse`

`com.kkstr.bundesliga.data.response.LiveEventTypesResponse`

| JSON | Java type |
| --- | --- |
| `a` (no SerializedName) | `string` |
| `dds` | `Lcom/google/gson/JsonObject;` |
| `it` | `list` |
| `lcud` | `string` |

### `LivePitchBoost`

`com.kkstr.bundesliga.data.response.LivePitchBoost`

| JSON | Java type |
| --- | --- |
| `acol` | `string` |
| `boi` | `string` |
| `p` | `int` |
| `d` | `string` |
| `f` | `string` |
| `ti` | `string` |

### `LoginOption`

`com.kkstr.bundesliga.data.response.LoginOption`

| JSON | Java type |
| --- | --- |
| `cfg` | `Auth0Configuration` |
| `t` | `int` |

### `LoginResponseV4`

`com.kkstr.bundesliga.data.response.LoginResponseV4`

| JSON | Java type |
| --- | --- |
| `apiurl` | `string` |
| `tkn` | `string` |
| `tknex` | `string` |
| `fb` | `string` |
| `err` | `int` |
| `errMsg` | `string` |
| `isnu` | `boolean` |
| `isnr` | `boolean` |
| `rtkn` | `string` |
| `srv` | `list` |
| `u` | `UserV4` |

### `ManagerDashboardResponse`

`com.kkstr.bundesliga.data.response.ManagerDashboardResponse`

| JSON | Java type |
| --- | --- |
| `ap` | `int` |
| `bemdn` | `int` |
| `fp` | `list` |
| `hhl` | `int` |
| `hhsp` | `int` |
| `hhw` | `int` |
| `hpt` | `int` |
| `adm` | `boolean` |
| `ph` | `list` |
| `li` | `int` |
| `leagueImageUrl` (no SerializedName) | `string` |
| `lnm` | `string` |
| `u` | `int` |
| `uim` | `string` |
| `st` | `int` |
| `unm` | `string` |
| `mdw` | `int` |
| `mds` | `list` |
| `nd` | `int` |
| `pl` | `int` |
| `prft` | `int` |
| `sl` | `int` |
| `sw` | `int` |
| `tv` | `int` |
| `tp` | `int` |
| `not` | `int` |

### `ManagerPerformanceResponse`

`com.kkstr.bundesliga.data.response.ManagerPerformanceResponse`

| JSON | Java type |
| --- | --- |
| `u` | `string` |
| `st` | `int` |
| `unm` | `string` |
| `it` | `list` |

### `ManagerSquadResponse`

`com.kkstr.bundesliga.data.response.ManagerSquadResponse`

| JSON | Java type |
| --- | --- |
| `u` | `string` |
| `st` | `int` |
| `unm` | `string` |
| `mu` | `MatchupItem` |
| `nps` | `int` |
| `it` | `list` |

### `ManagerTransfersResponse`

`com.kkstr.bundesliga.data.response.ManagerTransfersResponse`

| JSON | Java type |
| --- | --- |
| `u` | `string` |
| `unm` | `string` |
| `it` | `list` |

### `MatchClubPointsData`

`com.kkstr.bundesliga.data.response.MatchClubPointsData`

| JSON | Java type |
| --- | --- |
| `lf` | `string` |
| `p` | `int` |
| `sym` | `string` |
| `tid` | `string` |

### `MatchDayCountdownResponse`

`com.kkstr.bundesliga.data.response.MatchDayCountdownResponse`

| JSON | Java type |
| --- | --- |
| `dt` | `string` |
| `sn` | `string` |

### `MatchDaySummary`

`com.kkstr.bundesliga.data.response.MatchDaySummary`

| JSON | Java type |
| --- | --- |
| `t1g` | `int` |
| `t1` | `string` |
| `t2g` | `int` |
| `t2` | `string` |
| `mdln` | `string` |
| `cur` | `boolean` |
| `day` | `int` |
| `mdst` | `int` |
| `md` | `string` |
| `t1im` | `string` |
| `t2im` | `string` |

### `MatchDaySummaryCheckoutPlayerResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummaryCheckoutPlayerResponse`

| JSON | Java type |
| --- | --- |
| `ln` | `string` |
| `i` | `string` |
| `pim` | `string` |
| `p` | `int` |

### `MatchDaySummaryCheckoutTeamRowResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummaryCheckoutTeamRowResponse`

| JSON | Java type |
| --- | --- |
| `n` | `string` |
| `spl` | `int` |
| `spt` | `int` |
| `uim` | `string` |

### `MatchDaySummaryEarningsAchievementItemResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummaryEarningsAchievementItemResponse`

| JSON | Java type |
| --- | --- |
| `ac` | `int` |
| `t` | `int` |
| `n` | `string` |
| `er` | `long` |

### `MatchDaySummaryEarningsAchievementsResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummaryEarningsAchievementsResponse`

| JSON | Java type |
| --- | --- |
| `er` | `long` |
| `it` | `list` |
| `tc` | `int` |

### `MatchDaySummaryEarningsPointsResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummaryEarningsPointsResponse`

| JSON | Java type |
| --- | --- |
| `er` | `long` |
| `epp` | `long` |
| `p` | `int` |

### `MatchDaySummaryEarningsSheetResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummaryEarningsSheetResponse`

| JSON | Java type |
| --- | --- |
| `ach` | `MatchDaySummaryEarningsAchievementsResponse` |
| `mdp` | `MatchDaySummaryEarningsPointsResponse` |
| `te` | `long` |

### `MatchDaySummaryRankingSheetResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummaryRankingSheetResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `MatchDaySummaryRankingSheetUser`

`com.kkstr.bundesliga.data.response.MatchDaySummaryRankingSheetUser`

| JSON | Java type |
| --- | --- |
| `cur` | `boolean` |
| `mdpl` | `int` |
| `mdp` | `long` |
| `spl` | `int` |
| `spt` | `int` |
| `sp` | `long` |
| `i` | `string` |
| `uim` | `string` |
| `n` | `string` |

### `MatchDaySummaryRankingUser`

`com.kkstr.bundesliga.data.response.MatchDaySummaryRankingUser`

| JSON | Java type |
| --- | --- |
| `cur` | `boolean` |
| `pl` | `int` |
| `p` | `int` |
| `i` | `string` |
| `uim` | `string` |
| `n` | `string` |

### `MatchDaySummarySquadUpdatePlayerResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummarySquadUpdatePlayerResponse`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `pim` | `string` |
| `st` | `int` |

### `MatchDaySummarySquadUpdateResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummarySquadUpdateResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `tc` | `int` |

### `MatchDaySummarySquadUpdateSheetItemResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummarySquadUpdateSheetItemResponse`

| JSON | Java type |
| --- | --- |
| `ln` | `string` |
| `i` | `string` |
| `pim` | `string` |
| `p` | `int` |
| `pos` | `int` |
| `st` | `int` |

### `MatchDaySummarySquadUpdateSheetResponse`

`com.kkstr.bundesliga.data.response.MatchDaySummarySquadUpdateSheetResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `MatchEventItemResponse`

`com.kkstr.bundesliga.data.response.MatchEventItemResponse`

| JSON | Java type |
| --- | --- |
| `amn` | `int` |
| `gcr` | `int` |
| `ke` | `int` |
| `mt` | `int` |
| `psi` | `int` |
| `pi` | `string` |
| `pim` | `string` |
| `pn` | `string` |
| `rev` | `MatchEventItemResponse` |
| `tid` | `string` |

### `MatchEventsResponse`

`com.kkstr.bundesliga.data.response.MatchEventsResponse`

| JSON | Java type |
| --- | --- |
| `events` | `list` |

### `MatchHighlightResponse`

`com.kkstr.bundesliga.data.response.MatchHighlightResponse`

| JSON | Java type |
| --- | --- |
| `ke` | `int` |
| `mt` | `int` |
| `pn` | `string` |
| `tid` | `string` |

### `MatchLineupsResponse`

`com.kkstr.bundesliga.data.response.MatchLineupsResponse`

| JSON | Java type |
| --- | --- |
| `t1` | `TeamLineup` |
| `t2` | `TeamLineup` |

### `MatchOverviewResponse`

`com.kkstr.bundesliga.data.response.MatchOverviewResponse`

| JSON | Java type |
| --- | --- |
| `brcs` | `list` |
| `clp` | `list` |
| `bo` | `MatchBettingOdds` |
| `pvm` | `PreviousMeetingsData` |
| `rf` | `RecentFormData` |
| `sst` | `StatCategoryData` |
| `tpl` | `list` |
| `tst` | `StatCategoryData` |
| `vo` | `MatchVotingData` |

### `MatchStatisticsResponse`

`com.kkstr.bundesliga.data.response.MatchStatisticsResponse`

| JSON | Java type |
| --- | --- |
| `cts` | `list` |
| `sav` | `boolean` |

### `MatchSummaryResponse`

`com.kkstr.bundesliga.data.response.MatchSummaryResponse`

| JSON | Java type |
| --- | --- |
| `fst` | `int` |
| `hl` | `list` |
| `md` | `string` |
| `mt` | `int` |
| `mph` | `int` |
| `t1c` | `string` |
| `t1g` | `int` |
| `t1` | `string` |
| `t1im` | `string` |
| `t1n` | `string` |
| `t1sy` | `string` |
| `t2c` | `string` |
| `t2g` | `int` |
| `t2` | `string` |
| `t2im` | `string` |
| `t2n` | `string` |
| `t2sy` | `string` |

### `MatchTopPlayerData`

`com.kkstr.bundesliga.data.response.MatchTopPlayerData`

| JSON | Java type |
| --- | --- |
| `pim` | `string` |
| `n` | `string` |
| `pi` | `string` |
| `p` | `int` |
| `pos` | `int` |
| `tid` | `string` |

### `MatchVotingData`

`com.kkstr.bundesliga.data.response.MatchVotingData`

| JSON | Java type |
| --- | --- |
| `p2` | `int` |
| `px` | `int` |
| `p1` | `int` |
| `vop` | `boolean` |
| `uv` | `int` |
| `vt` | `int` |

### `MatchupsResponse`

`com.kkstr.bundesliga.data.response.MatchupsResponse`

| JSON | Java type |
| --- | --- |
| `err` | `int` |
| `errMsg` | `string` |
| `ia` | `boolean` |
| `mds` | `list` |

### `MyChallengesResponse`

`com.kkstr.bundesliga.data.response.MyChallengesResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `MyElevenResponse`

`com.kkstr.bundesliga.data.response.MyElevenResponse`

| JSON | Java type |
| --- | --- |
| `pa` | `boolean` |
| `bos` | `LivePitchBoost` |
| `cpte` | `boolean` |
| `ia` | `boolean` |
| `lpc` | `int` |
| `top` | `int` |
| `mu` | `MatchupItem` |
| `nlp` | `list` |
| `lp` | `list` |
| `p` | `int` |
| `clpc` | `int` |

### `MyLeaguesInfoResponse`

`com.kkstr.bundesliga.data.response.MyLeaguesInfoResponse`

| JSON | Java type |
| --- | --- |
| `err` | `int` |
| `errMsg` | `string` |
| `lins` | `list` |

### `MyLeaguesResponse`

`com.kkstr.bundesliga.data.response.MyLeaguesResponse`

| JSON | Java type |
| --- | --- |
| `anol` | `int` |
| `esfu` | `list` |
| `it` | `list` |

### `MyPlayersResponse`

`com.kkstr.bundesliga.data.response.MyPlayersResponse`

| JSON | Java type |
| --- | --- |
| `cpte` | `boolean` |
| `it` | `list` |
| `mppu` | `int` |
| `ua` | `string` |

### `NewsListResponse`

`com.kkstr.bundesliga.data.response.NewsListResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `OnboardingChallengeAutoFillResponse`

`com.kkstr.bundesliga.data.response.OnboardingChallengeAutoFillResponse`

| JSON | Java type |
| --- | --- |
| `lt` | `string` |
| `pls` | `list` |

### `OnboardingChallengeResponse`

`com.kkstr.bundesliga.data.response.OnboardingChallengeResponse`

| JSON | Java type |
| --- | --- |
| `lt` | `list` |
| `b` | `long` |
| `ch` | `string` |
| `chim` | `string` |
| `chn` | `string` |
| `cpi` | `string` |
| `dt` | `string` |
| `usfp` | `list` |
| `lpc` | `int` |
| `mpst` | `int` |

### `OnboardingRecommendationResponse`

`com.kkstr.bundesliga.data.response.OnboardingRecommendationResponse`

| JSON | Java type |
| --- | --- |
| `cps` | `list` |
| `gpmg` | `string` |
| `gpmsq` | `string` |
| `gpmfl` | `string` |
| `it` | `list` |
| `onbal` | `string` |
| `onbcl` | `string` |
| `onbft` | `string` |
| `onbjl` | `string` |
| `onbri` | `string` |
| `onbspu` | `string` |
| `slgms` | `boolean` |
| `gpms` | `string` |

### `OnboardingRushAssetResponse`

`com.kkstr.bundesliga.data.response.OnboardingRushAssetResponse`

| JSON | Java type |
| --- | --- |
| `as` | `string` |

### `OnboardingValidateInvitationCodeResponse`

`com.kkstr.bundesliga.data.response.OnboardingValidateInvitationCodeResponse`

| JSON | Java type |
| --- | --- |
| `anol` | `int` |
| `cpi` | `string` |
| `cpim` | `string` |
| `err` | `int` |
| `errMsg` | `string` |
| `gpm` | `int` |
| `ibun` | `string` |
| `d` | `string` |
| `li` | `string` |
| `lim` | `string` |
| `lmiu` | `list` |
| `lnm` | `string` |
| `dt` | `string` |
| `mgc` | `int` |

### `PlaceBidResponse`

`com.kkstr.bundesliga.data.response.PlaceBidResponse`

| JSON | Java type |
| --- | --- |
| `err` | `int` |
| `errMsg` | `string` |
| `ofi` | `string` |

### `PlayerCenterResponse`

`com.kkstr.bundesliga.data.response.PlayerCenterResponse`

| JSON | Java type |
| --- | --- |
| `bos` | `LivePitchBoost` |
| `t1g` | `int` |
| `t1` | `string` |
| `t2g` | `int` |
| `t2` | `string` |
| `events` | `list` |
| `i` | `string` |
| `ictp` | `boolean` |
| `mc` | `int` |
| `mi` | `string` |
| `mt` | `int` |
| `mtd` | `string` |
| `mst` | `int` |
| `md` | `string` |
| `n` | `string` |
| `pim` | `string` |
| `st` | `int` |
| `p` | `int` |
| `t1im` | `string` |
| `t2im` | `string` |
| `tid` | `string` |

### `PlayerLeagueOwnerData`

`com.kkstr.bundesliga.data.response.PlayerLeagueOwnerData`

| JSON | Java type |
| --- | --- |
| `iposl` | `boolean` |
| `li` | `string` |
| `lim` | `string` |
| `lnm` | `string` |
| `oui` | `string` |
| `onm` | `string` |
| `uim` | `string` |

### `PlayerMarketValueResponse`

`com.kkstr.bundesliga.data.response.PlayerMarketValueResponse`

| JSON | Java type |
| --- | --- |
| `idp` | `boolean` |
| `iso` | `boolean` |
| `sprmv` | `SponsorLogoAd` |
| `hmv` | `double` |
| `lmv` | `double` |
| `it` | `list` |
| `prlo` | `double` |
| `trp` | `double` |

### `PlayerPerformanceResponse`

`com.kkstr.bundesliga.data.response.PlayerPerformanceResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `PlayerResponse`

`com.kkstr.bundesliga.data.response.PlayerResponse`

| JSON | Java type |
| --- | --- |
| `a` | `int` |
| `ap` | `int` |
| `cv` | `long` |
| `cs` | `int` |
| `fn` | `string` |
| `mdsum` | `list` |
| `g` | `int` |
| `sprh` | `SponsorLogoAd` |
| `i` | `string` |
| `iposl` | `boolean` |
| `ln` | `string` |
| `uim` | `string` |
| `mv` | `long` |
| `sprmv` | `SponsorLogoAd` |
| `mvt` | `int` |
| `mc` | `int` |
| `nin` | `string` |
| `r` | `int` |
| `sec` | `int` |
| `y` | `int` |
| `oui` | `string` |
| `pes` | `int` |
| `ph` | `list` |
| `pim` | `string` |
| `opl` | `list` |
| `ismc` | `int` |
| `pos` | `int` |
| `plpim` | `string` |
| `ts` | `string` |
| `shn` | `int` |
| `smc` | `int` |
| `smdc` | `int` |
| `prob` | `int` |
| `st` | `int` |
| `dt` | `string` |
| `stxt` | `string` |
| `stl` | `list` |
| `tid` | `string` |
| `tim` | `string` |
| `tn` | `string` |
| `tp` | `int` |
| `tfhmvt` | `long` |
| `ua` | `string` |

### `PlayerTransferHistory`

`com.kkstr.bundesliga.data.response.PlayerTransferHistory`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `PlayerTransfersResponse`

`com.kkstr.bundesliga.data.response.PlayerTransfersResponse`

| JSON | Java type |
| --- | --- |
| `exs` | `long` |
| `ipl` | `boolean` |
| `mv` | `long` |
| `n` | `string` |
| `ofs` | `list` |
| `oui` | `string` |
| `uim` | `string` |
| `onm` | `string` |
| `iposl` | `boolean` |
| `iotm` | `boolean` |
| `prc` | `long` |
| `uoid` | `string` |
| `uop` | `long` |

### `PlayersOnTransferResponse`

`com.kkstr.bundesliga.data.response.PlayersOnTransferResponse`

| JSON | Java type |
| --- | --- |
| `lmda` | `boolean` |
| `lmds` | `string` |
| `mvud` | `string` |
| `day` | `int` |
| `dt` | `string` |
| `nps` | `int` |
| `tv` | `long` |
| `it` | `list` |
| `sn` | `string` |

### `PremiumMarketingBannerResponse`

`com.kkstr.bundesliga.data.response.PremiumMarketingBannerResponse`

| JSON | Java type |
| --- | --- |
| `pmb` | `SponsorLogoAd` |

### `PreviousMeetingData`

`com.kkstr.bundesliga.data.response.PreviousMeetingData`

| JSON | Java type |
| --- | --- |
| `t2g` | `int` |
| `t1g` | `int` |
| `day` | `int` |
| `sn` | `string` |

### `PreviousMeetingsData`

`com.kkstr.bundesliga.data.response.PreviousMeetingsData`

| JSON | Java type |
| --- | --- |
| `t2w` | `int` |
| `drs` | `int` |
| `t1w` | `int` |
| `mts` | `list` |

### `PromotionV4Response`

`com.kkstr.bundesliga.data.response.PromotionV4Response`

| JSON | Java type |
| --- | --- |
| `ed` | `string` |
| `prod` | `ProductData` |
| `f` | `string` |
| `sd` | `string` |

### `RecentFormData`

`com.kkstr.bundesliga.data.response.RecentFormData`

| JSON | Java type |
| --- | --- |
| `t2` | `list` |
| `t1` | `list` |

### `RecentFormMatchData`

`com.kkstr.bundesliga.data.response.RecentFormMatchData`

| JSON | Java type |
| --- | --- |
| `gc` | `int` |
| `gf` | `int` |
| `ht` | `boolean` |
| `lf` | `string` |
| `tid` | `string` |

### `RefreshTokenResponseV4`

`com.kkstr.bundesliga.data.response.RefreshTokenResponseV4`

| JSON | Java type |
| --- | --- |
| `tkn` | `string` |
| `tknex` | `string` |
| `mfacp` | `list` |
| `err` | `int` |
| `errMsg` | `string` |
| `prms` | `list` |
| `rtkn` | `string` |

### `RegisterUserV4Response`

`com.kkstr.bundesliga.data.response.RegisterUserV4Response`

| JSON | Java type |
| --- | --- |
| `tkn` | `string` |
| `tknex` | `string` |
| `fb` | `string` |
| `err` | `int` |
| `errMsg` | `string` |
| `isnu` | `boolean` |
| `rtkn` | `string` |
| `lins` | `list` |
| `u` | `UserV4` |

### `ResetResponse`

`com.kkstr.bundesliga.data.response.ResetResponse`

| JSON | Java type |
| --- | --- |
| `b` | `long` |
| `pls` | `list` |
| `tv` | `long` |

### `RushPromotionResponse`

`com.kkstr.bundesliga.data.response.RushPromotionResponse`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `cdfurl` | `string` |
| `ch` | `string` |
| `spfurl` | `string` |

### `ScoutPlayersListResponse`

`com.kkstr.bundesliga.data.response.ScoutPlayersListResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `spr` | `SponsorLogoAd` |

### `SeasonCompleteResponse`

`com.kkstr.bundesliga.data.response.SeasonCompleteResponse`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `us` | `list` |
| `sn` | `string` |

### `SeasonCompleteUserData`

`com.kkstr.bundesliga.data.response.SeasonCompleteUserData`

| JSON | Java type |
| --- | --- |
| `pl` | `int` |
| `tp` | `int` |
| `i` | `string` |
| `uim` | `string` |
| `unm` | `string` |

### `SocialHubInvitationResponse`

`com.kkstr.bundesliga.data.response.SocialHubInvitationResponse`

| JSON | Java type |
| --- | --- |
| `unm` | `string` |

### `SocialHubResponse`

`com.kkstr.bundesliga.data.response.SocialHubResponse`

| JSON | Java type |
| --- | --- |
| `shesim` | `string` |
| `shfl` | `list` |
| `shme` | `SocialHubManager` |

### `SocialHubSearchResponse`

`com.kkstr.bundesliga.data.response.SocialHubSearchResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `SpDistributionBracketItemResponse`

`com.kkstr.bundesliga.data.response.SpDistributionBracketItemResponse`

| JSON | Java type |
| --- | --- |
| `bt` | `string` |
| `bv` | `int` |
| `bsp` | `int` |

### `SpDistributionResponse`

`com.kkstr.bundesliga.data.response.SpDistributionResponse`

| JSON | Java type |
| --- | --- |
| `bsh` | `string` |
| `bi` | `list` |

### `SquadPlayerSelectionListResponse`

`com.kkstr.bundesliga.data.response.SquadPlayerSelectionListResponse`

| JSON | Java type |
| --- | --- |
| `cpte` | `boolean` |
| `it` | `list` |

### `StatCategoryData`

`com.kkstr.bundesliga.data.response.StatCategoryData`

| JSON | Java type |
| --- | --- |
| `cp2` | `StatCompetitionData` |
| `cp1` | `StatCompetitionData` |
| `it` | `list` |
| `sn` | `string` |
| `t` | `int` |

### `StatCompetitionData`

`com.kkstr.bundesliga.data.response.StatCompetitionData`

| JSON | Java type |
| --- | --- |
| `lf` | `string` |
| `cpn` | `string` |

### `StatItemData`

`com.kkstr.bundesliga.data.response.StatItemData`

| JSON | Java type |
| --- | --- |
| `b2` | `boolean` |
| `r2` | `TeamRecord` |
| `v2` | `double` |
| `b1` | `boolean` |
| `r1` | `TeamRecord` |
| `v1` | `double` |
| `t` | `int` |

### `SupportContactInfoResponse`

`com.kkstr.bundesliga.data.response.SupportContactInfoResponse`

| JSON | Java type |
| --- | --- |
| `sm` | `string` |

### `TeamCenterResponse`

`com.kkstr.bundesliga.data.response.TeamCenterResponse`

| JSON | Java type |
| --- | --- |
| `lp` | `list` |
| `us` | `list` |
| `n` | `string` |
| `nlp` | `list` |
| `ppc` | `int` |
| `perfp` | `int` |
| `clpc` | `int` |

### `TeamLineup`

`com.kkstr.bundesliga.data.response.TeamLineup`

| JSON | Java type |
| --- | --- |
| `ats` | `string` |
| `nlp` | `list` |
| `s11` | `boolean` |
| `pli` | `string` |
| `pts` | `string` |
| `lp` | `list` |
| `tid` | `string` |

### `TeamProfileResponse`

`com.kkstr.bundesliga.data.response.TeamProfileResponse`

| JSON | Java type |
| --- | --- |
| `td` | `int` |
| `tl` | `int` |
| `tw` | `int` |
| `pl` | `int` |
| `it` | `list` |
| `p` | `int` |
| `plpim` | `string` |
| `ts` | `string` |
| `tid` | `string` |
| `tim` | `string` |
| `tn` | `string` |
| `tv` | `long` |

### `TeamRecord`

`com.kkstr.bundesliga.data.response.TeamRecord`

| JSON | Java type |
| --- | --- |
| `dws` | `string` |
| `lss` | `string` |
| `wns` | `string` |

### `TeamValueHistoryItem`

`com.kkstr.bundesliga.data.response.TeamValueHistoryItem`

| JSON | Java type |
| --- | --- |
| `tv` | `long` |
| `ts` | `int` |

### `TeamValueHistoryResponse`

`com.kkstr.bundesliga.data.response.TeamValueHistoryResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `TopRankingManagersResponse`

`com.kkstr.bundesliga.data.response.TopRankingManagersResponse`

| JSON | Java type |
| --- | --- |
| `day` | `int` |
| `m` | `list` |
| `esp` | `int` |
| `ia` | `boolean` |
| `tom` | `list` |
| `uc` | `int` |

### `TransferAdminUserData`

`com.kkstr.bundesliga.data.response.TransferAdminUserData`

| JSON | Java type |
| --- | --- |
| `adm` | `boolean` |
| `n` | `string` |
| `i` | `string` |
| `uim` | `string` |

### `TransferAdminUsersResponse`

`com.kkstr.bundesliga.data.response.TransferAdminUsersResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `TransferUndoResponse`

`com.kkstr.bundesliga.data.response.TransferUndoResponse`

| JSON | Java type |
| --- | --- |
| `hm` | `boolean` |
| `it` | `list` |

### `UnlockedSquadPlayer`

`com.kkstr.bundesliga.data.response.UnlockedSquadPlayer`

| JSON | Java type |
| --- | --- |
| `i` | `string` |
| `pim` | `string` |
| `prob` | `int` |

### `UnlockedSquadResponse`

`com.kkstr.bundesliga.data.response.UnlockedSquadResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |
| `prfu` | `string` |

### `UrlDataResponse`

`com.kkstr.bundesliga.data.response.UrlDataResponse`

| JSON | Java type |
| --- | --- |
| `url` | `string` |

### `UserInfoResponse`

`com.kkstr.bundesliga.data.response.UserInfoResponse`

| JSON | Java type |
| --- | --- |
| `u` | `UserV4` |

### `UserLeagueInfoResponse`

`com.kkstr.bundesliga.data.response.UserLeagueInfoResponse`

| JSON | Java type |
| --- | --- |
| `b` | `double` |
| `bs` | `int` |
| `cpi` | `string` |
| `cd` | `string` |
| `gpm` | `int` |
| `hum` | `boolean` |
| `adm` | `boolean` |
| `as2e` | `boolean` |
| `isp` | `boolean` |
| `lim` | `string` |
| `lnm` | `string` |
| `mgc` | `int` |
| `mdct` | `int` |
| `mppu` | `int` |
| `mpst` | `int` |
| `mgm` | `int` |
| `nt` | `NewTeamData` |
| `rnkm` | `int` |
| `tpc` | `list` |
| `upe` | `boolean` |
| `un` | `int` |
| `isvf` | `boolean` |

### `UserTrackingItem`

`com.kkstr.bundesliga.data.response.UserTrackingItem`

| JSON | Java type |
| --- | --- |
| `dt` | `string` |
| `t` | `int` |

### `UserTrackingResponse`

`com.kkstr.bundesliga.data.response.UserTrackingResponse`

| JSON | Java type |
| --- | --- |
| `it` | `list` |

### `UserV4`

`com.kkstr.bundesliga.data.response.UserV4`

| JSON | Java type |
| --- | --- |
| `birthday` | `string` |
| `mfacp` | `list` |
| `cover` | `string` |
| `email` | `string` |
| `emois` | `int` |
| `facebookId` | `string` |
| `flags` | `int` |
| `gender` | `int` |
| `enableBeta` | `boolean` |
| `emv` | `boolean` |
| `isnu` | `boolean` |
| `name` | `string` |
| `notifications` | `int` |
| `password` | `string` |
| `perms` | `list` |
| `proExpiry` | `string` |
| `profile` | `string` |
| `emoir` | `boolean` |
| `emvr` | `boolean` |
| `trd` | `int` |
| `efb` | `string` |
| `trialExpiry` | `string` |
| `sfb` | `string` |
| `id` | `string` |
| `uim` | `string` |
| `userPermissions` | `string` |
| `vemail` | `string` |

### `V4MyLeague`

`com.kkstr.bundesliga.data.response.V4MyLeague`

| JSON | Java type |
| --- | --- |
| `b` | `long` |
| `bs` | `int` |
| `cpim` | `string` |
| `cpi` | `string` |
| `gpm` | `int` |
| `f` | `string` |
| `i` | `string` |
| `idf` | `boolean` |
| `isp` | `boolean` |
| `lim` | `string` |
| `lpc` | `int` |
| `n` | `string` |
| `pl` | `int` |
| `rnkm` | `int` |
| `tv` | `long` |
| `clpc` | `int` |
| `un` | `int` |
| `isvf` | `boolean` |
| `vr` | `int` |

### `ValidateInvitationCodeResponse`

`com.kkstr.bundesliga.data.response.ValidateInvitationCodeResponse`

| JSON | Java type |
| --- | --- |
| `err` | `int` |
| `errMsg` | `string` |
| `ibun` | `string` |
| `li` | `string` |
| `lnm` | `string` |
| `pld` | `LeagueAdditionalData` |

### `ValidatePurchaseResponse`

`com.kkstr.bundesliga.data.response.ValidatePurchaseResponse`

| JSON | Java type |
| --- | --- |
| `err` | `int` |
| `errMsg` | `string` |
| `isv` | `boolean` |
| `prms` | `list` |
| `exd` | `string` |
| `flg` | `int` |

### `VerifyEmailResponse`

`com.kkstr.bundesliga.data.response.VerifyEmailResponse`

| JSON | Java type |
| --- | --- |
| `rslt` | `int` |


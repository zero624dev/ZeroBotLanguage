import Ilang from '../language';

export default {
    commands: {
        magicconch: {
            scripts: {
                no_input_error_title: "Please enter your question.",
                no_input_error_description: "{0}magicconch <question>",
                embed_title: "Magic Conch Shell",
                question_field_title: "Question",
                answer_field_title: "Answer",
                answer_field_dialogues: [
                    "Maybe someday.",
                    "Nothing.",
                    "Neither.",
                    "I don't think so.",
                    "Yes.",
                    "Try asking again.",
                    "No."
                ]
            },
            help: {
                name: "magicconch",
                syntax: ["question"],
                description: "Asks a <question> to the Magic Conch Shell.",
                aliases: [
                    "magicconchshell",
                    "mcs"
                ]
            }
        },
        petthe: {
            scripts: {
                not_found: "Couldn't find member.",
                search_menu_title: "\"{0}\" Member Search",
                search_menu_placeholder: "Please select a member",
            },
            help: {
                name: "petthe",
                syntax: ["member"],
                description: "Pet The <member>"
            }
        },
        pirateroulette: {
            scripts: {
                game_title: "Pirate Roulette",
                participants_field_name: "Players",
                whose_turn: "{0}'s turn.",
                already_joined_title: "Already joined.",
                end_in_whose_turn: "End in {0}'s turn.",
                start_button_label: "Start",
                join_button_label: "Join",
                rotate_button_label: "Turn it to the back.",
                wait_turn_title: "Please wait for your turn.",
                not_joined_title: "You are not a participant.",
            },
            help: {
                name: "PirateRoulette",
                description: "Creates the pirate roulette game."
            }
        },
        ship: {
            scripts: {
                no_input_error_title: "Give me two things to ship!",
                same_input_error_title: "What are you trying to do here.",
                ship_embed_title: ":heartpulse: **SHIP MACHINE** :heartpulse:",
                ship_messages: [
                    "Awful :sob:",
                    "Bad :cry:",
                    "Pretty Low :frowning:",
                    "Not Too Great :confused:",
                    "Worse Than Average :neutral_face:",
                    "Barely :no_mouth:",
                    "Not Bad :slight_smile:",
                    "Pretty Good :smiley:",
                    "Great :smile:",
                    "Amazing! :heart_eyes:",
                    "PERFECT!! :heart:"
                ]
            },
            help: {
                name: "ship",
                syntax: ["ship1", "ship2"],
                description: "Shows the ship between <ship1> and <ship2>.",
            },
            slash: {}
        },
        tictactoe: {
            scripts: {
                game_title: "Tic Tac Toe",
                participants_field_name: "Players",
                whose_turn: "{0}'s turn.",
                whose_victory: "{0} won!",
                draw: "Draw!",
                wait_for_opponent: "Waiting for opponent...",
                wait_for_your_turn: "Please wait for your turn.",
                not_participant: "You are not a participant.",
            },
            help: {
                name: "tictactoe"
            },
            slash: {}
        },
        osu: {
            scripts: {
                profile_no_input: "Please enter your username.",
                profile_not_exist: "{0} doesn't exist!",
                profile_inactive_user: "INACTIVE / RESTRICTED USER",
                profile_embed_title: " ** Stats for {0} ** ",
                profile_embed_pp: "Performance",
                profile_field_profile: "Profile",
                profile_field_playtime: "Play Time",
                profile_field_accuracy: "Accuracy",
                profile_field_level: "Level",
                profile_field_play_count: "Play Count",
                profile_field_count: "Count",
                profile_field_hits: "Total Hits",
                profile_field_scores: "Scores",
                profile_field_total_scores: "Total Score",
                profile_field_ranked_scores: "Ranked Score",
                profile_field_top3: "Top Plays",
                recent_field_fc_pp: "{0} for FC",
                recent_field_map_completion: "Map Completion",
                recent_footer: "Try #{0} • {1} Ago On osu! Official Server"
            },
            help: {
                name: "osu"
            }
        },
        avatar: {
            scripts: {
                not_found: "Couldn't find member.",
                whose_avatar: "{0}'s avatar",
                search_menu_title: "\"{0}\" Member Search",
                search_menu_placeholder: "Please select a member",
            },
            help: {
                name: "avatar",
                syntax: ["member"],
                description: "Shows the avatar of a specific <member>.",
                aliases: [
                    "avatar",
                    "av"
                ]
            }
        },
        banner: {
            scripts: {
                not_found: "Couldn't find member.",
                whose_banner: "{0}'s banner",
                search_menu_title: "\"{0}\" Member Search",
                search_menu_placeholder: "Please select a member",
            },
            help: {
                name: "banner",
                syntax: ["member"],
                description: "Get the banner of a specific <member>."
            }
        },
        botinfo: {
            help: {
                name: "botinfo",
                description: "Shows this bot's info.",
                aliases: [
                    "bot",
                    "info"
                ]
            }
        },
        config: {
            scripts: {
                language_setting_title: "Please select a language to set up.",
                language_setting_description: "Current language: {0}",
                language_setting_placeholder: "Please select a language",
            },
            subCommands: {
                user: ["user"],
                guild: ["guild", "server"],
                school: ["school"],
                language: ["language"]
            },
            help: {
                name: "config",
                description: "Configure bot settings.",
                aliases: [
                    "setting"
                ]
            }
        },
        help: {
            scripts: {
                arg: " < command > ",
                help_field_usage: "Usage",
                help_field_aliases: "Aliases",
                help_field_requiredLevel: "Required User Level",
                error_embed_title: "Couldn't find such a command",
                error_embed_description: "Are you looking for the command below ? ",
                list_embed_title: "Command List",
                list_field_general: "General",
                list_field_music: "Music",
                list_field_fun: "Fun",
                list_field_game: "Game",
                list_field_game_stas: "Game Stats",
                list_field_moderation: "Moderation",
                list_field_utils: "Utils",
                list_empty: "empty"
            },
            help: {
                name: "help",
                syntax: ["command"],
                description: "Displays help message.",
                aliases: [
                    "help",
                    "command"
                ]
            }
        },
        playtime: {
            scripts: {
                whose_playtime: "'s Playtimes",
                online: "Online",
                idle: "Idle",
                dnd: "Dnd",
                offline: "Offline",
                failed: "Store Failed",
                format: "[3|day|days] [2|hour|hours] [1|minute|minutes]",
                year: "Year",
                month: "Month",
                day: "Day"
            },
            subCommands: {
                day: ["day", "d"],
                month: ["month", "mon", "m"],
                year: ["year", "y"]
            },
            help: {
                name: "playtime",
                syntax: ["day|month|year"],
                description: "Shows your Discord playtime.",
                aliases: [
                    "pt",
                    "pl"
                ]
            }
        },
        profile: {
            scripts: {
                not_found: "Couldn't find member.",
                field_joined: "Joined",
                field_created: "Created",
                field_roles: "Roles",
                field_user_level: "User Level",
                search_menu_title: "\"{0}\" Member Search",
                search_menu_placeholder: "Please select a member",
            },
            help: {
                name: "profile",
                syntax: ["member"],
                description: "Shows info about a specific <member>.",
                aliases: [
                    "whois"
                ]
            }
        },
        serverinfo: {
            scripts: {
                only_in_guild: "This command is available only on the server.",
                owner_field_title: "Owner",
                created_field_title: "Created",
                preferred_locale_field_title: "Preferred Locale",
                members_field_title: "Members",
                members_field_value: "> Robot: {0}, Human: {1}",
                channels_field_title: "Channels [{0}]",
                channels_field_value: "> Voice: {0}{1}\nText: {2}{3}",
                roles_field_title: "Roles",
                emojis_field_title: "Emojis [{0}]",
                stickers_field_title: "Stickers [{0}]",
                other_field_title: "Others",
                other_field_value: "Boosts - tier: {0}, count: {1}",
                features_field_title: "Features",
            },
            help: {
                name: "serverinfo",
                description: "Shows info about a this server",
                aliases: ["server"]
            }
        },
        signup: {
            scripts: {
                revoke_error_title: "You don't have [User] permissions.",
                revoke_error_description: "You can sign up with `{0}signup`.",
                revoke_embed_title: "Are you sure you want to revoke the signing up? ",
                revoke_embed_description: "It may interfere with the use of some commands.",
                signup_error_title: "You already have[User] permissions.",
                signup_error_description: "You can revoke signup with `{0}signup revoke`.",
                signup_embed_title: "Terms & Conditions Agreement",
                signup_embed_description: "[Terms of Service](https://zerobot.kr/terms), [Privacy Policy](https://zerobot.kr/privacy)",
                signup_embed_footer: "You can agree by pressing the ⭕ button below.",
                signup_agree_embed_title: "You have agreed to the Terms & Conditions Agreement.",
                signup_agree_embed_description: "You have completed your signing up.",
                signup_decline_embed_title: "You have declined the Terms & Conditions Agreement.",
                signup_decline_embed_description: "You have revoked your signing up.",
                withdrawal_agree_embed_title: "You have completed the membership withdrawal",
                withdrawal_agree_embed_description: "All of the user's data will be deleted.",
                withdrawal_decline_embed_title: "Maintain your membership",
                withdrawal_decline_embed_description: "End the withdrawal process."
            },
            subCommands: {
                revoke: ["revoke", "cancel"]
            },
            help: {
                name: "signup",
                syntax: ["revoke"],
                description: "Signs up to ZeroBot to obtain `1[User]` Level."
            }
        },
        snipe: {
            scripts: {
                not_available_in_dm: "Snipe is not available in the DM channel.",
                not_available_embed_title: "Snipe is not available in this channel.",
                not_available_embed_description: "Please add #snipe to the channel topic.\nThe stored messages will be deleted within 5 hours.",
                snipe_error_title: "There's no recently deleted message.",
                editsnipe_error_title: "There's no recently edited message."
            },
            subCommands: {
                delete: ["delete"],
                edit: ["edit"]
            },
            help: {
                name: "snipe",
                syntax: ["delete|edit"],
                description: "Shows the recently deleted or edited message."
            }
        },
        purge: {
            scripts: {
                limit_error_title: "No more than 100 messages can be deleted at once.",
                channel_error_title: "Couldn't delete messages.",
                permission_error_title: "Don't have the permission to `manage messages`.",
                user_permission_error_title: "You don't have permission to use this command.",
                fail_title: "Couldn't delete messages."
            },
            help: {
                name: "purge",
                syntax: ["number"],
                description: "Deletes <number> amount of messages. [MODERATOR/ADMIN ONLY]"
            }
        },
        filter: {
            scripts: {
                channel_error_title: "Please connect to voice channel first.",
                song_error_title: "Please play a song first.",
                input_error_title: "You entered the same filter twice, or a filter that does not exist.",
                embed_title: "Applied Filters",
                embed_footer: "filter <filter>",
                menu_placeholder: "Please select filters to apply.",
                no_filter: "No Filter"
            },
            help: {
                name: "filter",
                description: "Sets filter to the song."
            }
        },
        leave: {
            scripts: {
                no_voice_error_title: "There's no voice channel connected.",
                channel_error_title: "Please connect to voice channel first.",
                result_text: "Left from **{0}**.",
                vote_embed_title: "There's a song that someone else added.",
                vote_embed_description: "I will do it if the majority of the votes agree.\n(Voting is only for those who have added songs.)",
                cannot_vote_error_title: "Only those who add songs can vote."
            },
            help: {
                name: "queue",
                description: "Leaves the voice channel.",
                aliases: [
                    "disconnect",
                    "dis"
                ]
            }
        },
        nowplay: {
            scripts: {
                channel_error_title: "Please connect to voice channel first.",
                song_error_title: "Please play a song first.",
                not_found_song_error: "Couldn't find the song.",
            },
            help: {
                name: "nowplay",
                description: "Shows the music playing now.",
                aliases: [
                    "np"
                ]
            }
        },
        play: {
            scripts: {
                channel_error_title: "Please connect to voice channel first.",
                song_error_title: "Please play a song first.",
                already_play_song: "Already playing the song.",
                ask_change_channel: "Do you want to move the channel playing ? ",
                no_result_error_title: "No search result.",
                result_embed_title: "Youtube Search for \"${0}\"",
                menu_placeholder: "Please select a song to play.",
                change_channel_title: "Changed the channel that's playing.",
                stay_channel_title: "Stay on the channel that's playing.",
                select_song_title: "The song has been selected."
            },
            help: {
                name: "play",
                syntax: ["link|search"],
                description: "Plays the music.",
                aliases: [
                    "p"
                ]
            }
        },
        queue: {
            scripts: {
                channel_error_title: "Please connect to voice channel first.",
                song_error_title: "Please play a song first.",
                queue_embed_title: "Queue",
                no_title: "No Title",
                queue_clear_timeout_title: "It's been a minute.\nPlease try again.",
            },
            help: {
                name: "queue",
                description: "Shows the queue.",
                aliases: [
                    "q",
                    "playlist"
                ]
            }
        },
        seek: {
            scripts: {
                channel_error_title: "Please connect to voice channel first.",
                song_error_title: "Please play a song first.",
                range_error_title: "Exceeded the range of the song. ({0}s)",
                chapter_error_title: "There's no chapter.",
                chapter_embed_title: "Chapter Select Menu",
                chapter_menu_placeholder: "Please select a chapter to play. {0} ",
                song_match_error_title: "The song is not playing.",
                select_chapter_title: "{0} has been selected.",
                select_chapter_description: "Seeked to {0}.",
                chapter: "Chapter"
            },
            help: {
                name: "seek",
                syntax: ["sec|hh:mm:ss"],
                description: "Set the playing time to another position."
            }
        },
        volume: {
            scripts: {
                channel_error_title: "Please connect to voice channel first.",
                song_error_title: "Please play a song first.",
                range_error_title: "Please enter an integer between 1 and 100.",
                volume_embed_title: "Current Volume"
            },
            help: {
                name: "volume",
                syntax: ["1-100"],
                description: "Adjusts the volume of the song."
            }
        },
        color: {
            scripts: {
                attachment_error_title: "Please send it with the image to extract the color.",
                attachment_error_description: "You can take a partial screenshot with 'Shift + Win + S'.",
                invalid_input_error_title: "Not a valid input.",
                invalid_color_error_title: "Not a valid color.",
                result_embed_title: "Color Picker",
                unsupported_image_error_title: "Unsupported image format.",
                image_too_big_error_title: "Images larger than 1MB cannot be loaded."
            },
            help: {
                name: "color",
                syntax: ["hex|r,g,b"]
            }
        },
        crypto: {
            scripts: {
            },
            help: {
                name: "cryptocurrency",
                syntax: ["symbol", "unit(time)"],
                description: "Upbit.com Crypto Chart",
                aliases: [
                    "crypto", "coin"
                ]
            }
        },
        en2ko: {
            scripts: {
                result_embed_title: "EN -> KO",
                input_field_title: "Input",
                output_field_title: "Output"
            },
            help: {
                name: "en2ko",
                syntax: ["text"],
                description: "Converts <text>(English) to Korean(qwerty position).",
                aliases: ["e2k"]
            }
        },
        google: {
            help: {
                name: "google",
                syntax: ["query"],
                description: "Google something."
            }
        },
        meal: {
            scripts: {

            },
            help: {
                name: "meal",
                syntax: ["school"],
                description: "Shows the school meal information."
            }
        },
        pick: {
            scripts: {
                invalid_input: "Invalid type of information entered."
            },
            help: {
                name: "pick",
                syntax: ["A, B, C"],
                description: "Picks one randomly."
            }
        },
        translate: {
            scripts: {
                language: {
                    ko: "Korean",
                    en: "English",
                    ja: "Japanese",
                    "zh-CN": "Chinese (Simplified)",
                    "zh-TW": "Chinese (Traditional)",
                    es: "Spanish",
                    fr: "French",
                    ru: "Russian",
                    vi: "Vietnamese",
                    th: "Thai",
                    id: "Indonesian",
                    de: "German",
                    it: "Italian",
                },
                target_language: "Target : {0}",
                result_language: "Result : {0}",
                result_embed_title: "Translate",
                target_language_placeholder: "Please select a target language.",
                result_language_placeholder: "Please select a result language.",
            },
            help: {
                name: "translate",
                syntax: ["text"],
                description: "Translates the [text].",
                aliases: ["tr"]
            }
        }
    },
    events: {
        messageCreate: {
            arg_violation_title: "Incorrect Arguments",
            arg_violation_required: "{0} is required, but was not provided.",
            arg_violation_expected: "{0} expected [{1}], but got [{2}].",
            arg_violation_sub_command: "Please enter one of {0}",
            command_execution_error_title: "There was a problem executing the command.",
            deprecated_command_title: "Not Available Command",
            deprecated_command_description: "The command is blocked or in development.",
            insufficient_permissions_title: "Insufficient Permissions",
            check_permissions_description: "Please check if you and bot have the permissions below.\n{0}",
            insufficient_permissions_description: "You don't have permissions to use that command.",
            insufficient_permissions_field_user_level: "Your Permissions",
            insufficient_permissions_field_required_level: "Required Permissions",
            command_require_level_1: "[User] Permissions can be obtained through \"{0}signup\".",
            command_require_level_2_but_0: "[Member] Permissions can be obtained through \"{0}signup\" and joining the Zero Community.",
            command_require_level_2_but_1: "[Member] Permissions can be obtained through joining the Zero Community.",
            command_require_level_3: "Developer-only command."
        },
        interactionCreate: {
            others_interaction_title: "It's the interaction of another user.",
            interaction_error_title: "There was a problem during the interaction."
        }
    },
    etc: {
        select_menu_page_prev_option_label: "Prev Page",
        select_menu_page_next_option_label: "Next Page",
        select_menu_page_option_description: "Goto {0} Page.",
        distube_whose_request: "{0}'s song request",
        distube_whose_recommend: "{0}'s recommend",
        distube_unmanageable_stage_title: "No Permission to manage the stage.",
        distube_unmanageable_stage_description: "Please add the stage management authority or accept the request for the speaker.",
        distube_cannot_send_request_title: "Cannot send a request to speak.",
        distube_cannot_send_request_description: "Please turn on allow request from everyone.",
        distube_empty_queue_title: "The queue is empty.",
        distube_empty_queue_description: "Please leave the voice channel or use the command {0}leave.",
        distube_queued_title: "Queued",
        distube_queued_field_value: "Playlist",
        distube_queued_description: "Queued **{0}** tracks.",
        distube_no_recommend: "There's no related video.",
        distube_np_no_song: "There's no song that's currently playing.",
        distube_np_current_song: "Current Song",
        distube_np_volume: "Volume",
        distube_np_all_songs: "All Songs",
        distube_np_current_chapter: "Current Chapter",
        distube_np_host: "Host",
        distube_np_public: "Public",
        distube_np_private: "Private",
        distube_np_shuffle: "Shuffle",
        distube_np_shuffle_description: "Shuffle the songs in the queue.",
        distube_np_queue_placeholder: "Queue {0}",
        time_years: "[4|year|years]",
        time_days: "[3|day|days]",
        time_hours: "[2|hour|hours]",
        time_mins: "[1|minute|minutes]",
        time_secs: "[0|second|seconds]"
    },
    config: {
        code: "en",
        country: "US",
        name: "English, US",
        emoji: "🇺🇸",
    }
} as Ilang;
import Ilang from '../language';

export default {
    commands: {
        magicconch: {
            scripts: {
                no_input_error_title: "마법의 소라고동님에게 할 질문을 적어주세요.",
                no_input_error_description: "{0}마법의소라고동 <질문>",
                embed_title: "마법의 소라고동",
                question_field_title: "질문",
                answer_field_title: "대답",
                answer_field_dialogues: [
                    "언젠가는.",
                    "가만히 있어.",
                    "둘 다 안 돼.",
                    "그것도 안 돼.",
                    "그럼.",
                    "다시 한 번 물어봐.",
                    "안 돼."
                ]
            },
            help: {
                name: "마법의소라고동",
                syntax: ["질문"],
                description: "마법의 소라고동 님에게 질문합니다.",
                aliases: [
                    "마법의소라고둥",
                    "소라고동",
                    "소라고둥"
                ]
            }
        },
        petthe: {
            scripts: {
                not_found: "맴버를 찾지 못했어요.",
                search_menu_title: "\"{0}\" 멤버 검색 결과",
                search_menu_placeholder: "멤버를 선택해주세요."
            },
            help: {
                name: "쓰다듬기",
                syntax: ["멤버"],
                description: "<멤버>를 쓰다듬습니다."
            }
        },
        pirateroulette: {
            scripts: {
                game_title: "해적 룰렛",
                participants_field_name: "참가자",
                whose_turn: "{0}님의 차례에요.",
                already_joined_title: "이미 참가 중이에요.",
                end_in_whose_turn: "{0}님의 차례에서 끝났어요.",
                start_button_label: "시작",
                join_button_label: "참가",
                rotate_button_label: "뒷면으로 돌리기",
                wait_turn_title: "차례를 기다려주세요.",
                not_joined_title: "당신은 참가자가 아니에요.",
            },
            help: {
                name: "해적룰렛",
                description: "해적 룰렛 게임을 시작합니다.",
                aliases: [
                    "통아저씨"
                ]
            }
        },
        ship: {
            scripts: {
                no_input_error_title: "비교할 대상을 두개 입력해주세요.",
                same_input_error_title: "같은 걸 비교할 수 없어요.",
                ship_embed_title: ":heartpulse: **궁합 머신** :heartpulse:",
                ship_messages: [
                    "끔찍해요 :sob:",
                    "나빠요 :cry:",
                    "상당히 낮아요 :frowning:",
                    "낮아요 :confused:",
                    "평균보다 낮아요 :neutral_face:",
                    "겨우 절반이에요 :no_mouth:",
                    "나쁘지 않아요 :slight_smile:",
                    "꽤 좋아요 :smiley:",
                    "대단해요 :smile:",
                    "놀라워요! :heart_eyes:",
                    "완벽해요!! :heart:"
                ]
            },
            help: {
                name: "궁합",
                syntax: ["대상1", "대상2"],
                description: "두 대상의 궁합을 확인합니다.",
            },
            slash: {}
        },
        tictactoe: {
            scripts: {
                game_title: "틱택토",
                participants_field_name: "참가자",
                whose_turn: "{0}님의 차례예요.",
                whose_victory: "{0}님이 승리하셨어요!",
                draw: "무승부예요!",
                wait_for_opponent: "상대방을 기다리는 중이에요.",
                wait_for_your_turn: "차례를 기다려주세요.",
                not_participant: "당신은 참가자가 아니에요.",
            },
            help: {
                name: "틱택토"
            },
            slash: {}
        },
        osu: {
            scripts: {
                profile_no_input: "유저네임을 입력해주세요.",
                profile_not_exist: "{0}을(를) 찾을 수 없어요.",
                profile_inactive_user: "비활성·제한된 유저이에요.",
                profile_embed_title: "**{0}님의 스탯**",
                profile_embed_pp: "퍼포먼스",
                profile_field_profile: "프로필",
                profile_field_playtime: "플레이타임",
                profile_field_accuracy: "정확도",
                profile_field_level: "레벨",
                profile_field_play_count: "플레이 횟수",
                profile_field_count: "기록",
                profile_field_hits: "총 히트수",
                profile_field_scores: "스코어",
                profile_field_total_scores: "총 스코어",
                profile_field_ranked_scores: "랭크 스코어",
                profile_field_top3: "최고 플레이",
                recent_field_fc_pp: "풀콤보시: {0}",
                recent_field_map_completion: "비트맵 완주도",
                recent_footer: "{0}번째 시도 • {1} 전 • 오스! 오피셜 서버"
            },
            help: {
                name: "오스"
            }
        },
        avatar: {
            scripts: {
                not_found: "맴버를 찾지 못했어요.",
                whose_avatar: "{0}의 아바타",
                search_menu_title: "\"{0}\" 멤버 검색 결과",
                search_menu_placeholder: "멤버를 선택해주세요."
            },
            help: {
                name: "아바타",
                syntax: ["서버멤버"],
                description: "특정 멤버의 아바타를 보여줍니다.",
                aliases: ["아바타", "프사"]
            }
        },
        banner: {
            scripts: {
                not_found: "맴버를 찾지 못했어요.",
                whose_banner: "{0}의 배너",
                search_menu_title: "\"{0}\" 멤버 검색 결과",
                search_menu_placeholder: "멤버를 선택해주세요."
            },
            help: {
                name: "배너",
                syntax: ["멤버"],
                description: "특정 <멤버>의 배너를 가져옵니다."
            }
        },
        botinfo: {
            help: {
                name: "봇정보",
                description: "이 봇의 정보를 보여줍니다.",
                aliases: ["봇", "정보"]
            }
        },
        config: {
            scripts: {
                language_setting_title: "설정할 언어를 선택해주세요.",
                language_setting_description: "현재 언어: {0}",
                language_setting_placeholder: "언어를 선택해주세요.",
            },
            subCommands: {
                user: ["유저"],
                guild: ["서버"],
                school: ["학교"],
                language: ["언어"]
            },
            help: {
                name: "설정",
                description: "봇 관련 설정값을 수정합니다.",
                alliases: ["세팅"]
            }
        },
        help: {
            scripts: {
                arg: "<명령어>",
                help_field_usage: "사용법",
                help_field_aliases: "별명",
                help_field_requiredLevel: "필요 유저 레벨",
                error_embed_title: "그런 명령어를 찾을 수 없어요.",
                error_embed_description: "아래 명령어를 찾고 계신가요?",
                list_embed_title: "명령어 목록",
                list_field_general: "일반",
                list_field_music: "음악",
                list_field_fun: "재미",
                list_field_game: "게임",
                list_field_game_stas: "전적",
                list_field_moderation: "관리",
                list_field_utils: "도구",
                list_empty: "없음"
            },
            help: {
                name: "도움말",
                syntax: ["명령어"],
                description: "명령어의 사용법을 보여줍니다.",
                aliases: ["도움", "도움말", "명령어"]
            }
        },
        playtime: {
            scripts: {
                whose_playtime: "님의 플레이타임",
                online: "온라인",
                idle: "자리비움",
                dnd: "방해금지",
                offline: "오프라인",
                failed: "기록 실패",
                format: "[3|일] [2|시간] [1|분]",
                year: "年년",
                month: "月월",
                day: "日일"
            },
            subCommands: {
                day: ["일"],
                month: ["월", "달"],
                year: ["년", "연"]
            },
            help: {
                name: "플레이타임",
                syntax: ["일|월|년"],
                description: "디스코드 플레이타임을 보여줍니다.",
                aliases: ["플탐"]
            }
        },
        profile: {
            scripts: {
                not_found: "맴버를 찾지 못했어요.",
                field_joined: "서버가입",
                field_created: "계정생성",
                field_roles: "역할",
                field_user_level: "유저 레벨",
                search_menu_title: "\"{0}\" 멤버 검색 결과",
                search_menu_placeholder: "멤버를 선택해주세요."
            },
            help: {
                name: "프로필",
                syntax: ["멤버"],
                description: "해당 <멤버>의 정보를 보여줍니다."
            }
        },
        serverinfo: {
            scripts: {
                only_in_guild: "서버에서만 사용할 수 있는 명령어입니다.",
                owner_field_title: "소유자",
                created_field_title: "생성일",
                preferred_locale_field_title: "선호언어",
                members_field_title: "멤버",
                members_field_value: "> 로봇: {0}, 사람: {1}",
                channels_field_title: "채널 [{0}]",
                channels_field_value: "> 음성: {0}{1}, 채팅: {2}{3}",
                roles_field_title: "역할",
                emojis_field_title: "이모티콘 [{0}]",
                stickers_field_title: "스티커 [{0}]",
                other_field_title: "기타",
                other_field_value: "> 부스트 - 티어: {0}, 횟수: {1}",
                features_field_title: "기능"
            },
            help: {
                name: "서버정보",
                description: "이 서버의 정보를 보여줍니다.",
                aliases: ["서버"]
            }
        },
        signup: {
            scripts: {
                revoke_error_title: "[User] 권한을 가지고 있지 않아요.",
                revoke_error_description: "`{0}가입`으로 가입할 수 있어요.",
                revoke_embed_title: "정말 가입을 취소하시겠어요?",
                revoke_embed_description: "일부 명령어를 사용하는데 지장이 있을 수 있어요.",
                signup_error_title: "이미 [User] 권한을 가지고 있어요.",
                signup_error_description: "`{0}가입 취소`로 가입을 취소할 수 있어요.",
                signup_embed_title: "이용약관 동의",
                signup_embed_description: "[서비스 이용약관](https://policies.zerobot.kr/terms), [개인정보 처리방침](https://policies.zerobot.kr/privacy)",
                signup_embed_footer: "아래 ⭕ 버튼을 눌러 약관에 동의할 수 있어요.",
                signup_agree_embed_title: "서비스 이용약관에 동의하셨어요.",
                signup_agree_embed_description: "가입을 완료했어요.",
                signup_decline_embed_title: "서비스 이용약관에 거부하셨어요.",
                signup_decline_embed_description: "가입을 취소했어요.",
                withdrawal_agree_embed_title: "탈퇴를 완료했어요.",
                withdrawal_agree_embed_description: "사용자의 모든 데이터를 삭제할게요.",
                withdrawal_decline_embed_title: "가입을 유지할게요.",
                withdrawal_decline_embed_description: "탈퇴 절차를 종료할게요."
            },
            subCommands: {
                revoke: ["취소", "철회"]
            },
            help: {
                name: "가입",
                syntax: ["취소"],
                description: "제로봇에 가입하여 `1 [User]` 레벨을 얻습니다."
            }
        },
        snipe: {
            scripts: {
                not_available_in_dm: "DM에서는 사용할 수 없는 명령어에요.",
                not_available_embed_title: "이 명령어를 사용할 수 없는 채널이에요.",
                not_available_embed_description: "채널 주제에 #snipe를 추가해주세요.\n저장된 메시지는 5시간 후 삭제돼요.",
                snipe_error_title: "최근 지워진 메시지가 없어요.",
                editsnipe_error_title: "최근 수정된 메시지가 없어요."
            },
            subCommands: {
                delete: ["삭제"],
                edit: ["수정"]
            },
            help: {
                name: "스나이핑",
                syntax: ["삭제|수정"],
                description: "최근 삭제, 수정된 메시지를 보여줍니다.",
                aliases: ["스나이프"]
            }
        },
        purge: {
            scripts: {
                limit_error_title: "한 번에 100개 이상의 메시지를 지울 수 없어요.",
                channel_error_title: "이 행동을 할 수 없는 채널이에요.",
                permission_error_title: "`메시지 관리` 권한이 없어요.",
                user_permission_error_title: "이 명령어를 사용할 권한이 없어요.",
                fail_title: "메시지를 지우는데 실패했어요."
            },
            help: {
                name: "지우개",
                syntax: ["갯수"],
                description: "<갯수>개의 메시지를 삭제합니다. [관리자/서버장]"
            }
        },
        filter: {
            scripts: {
                channel_error_title: "먼저 음성 채널에 들어가주세요.",
                song_error_title: "먼저 노래를 재생해주세요.",
                input_error_title: "같은 필터가 두 번 입력됐거나, 없는 필터가 입력됐습니다.",
                embed_title: "적용된 필터",
                embed_footer: "필터 <필터>",
                menu_placeholder: "적용할 필터를 선택해주세요.",
                no_filter: "필터 없음"
            },
            help: {
                name: "필터",
                description: "노래에 필터를 적용합니다."
            }
        },
        leave: {
            scripts: {
                no_voice_error_title: "연결된 음성 채널이 없어요.",
                channel_error_title: "먼저 음성 채널에 들어가주세요.",
                result_text: "**{0}**에서 나왔어요.",
                vote_embed_title: "다른 사람이 추가한 노래가 있어요.",
                vote_embed_description: "투표에서 과반수가 동의한 경우 실행할게요.\n(투표는 노래를 추가한 사람만 가능해요.)",
                cannot_vote_error_title: "노래를 추가한 사람만 투표할 수 있어요."
            },
            help: {
                name: "나가",
                description: "재생 중인 음성 채널에서 나갑니다.",
                aliases: ["끊기"]
            }
        },
        nowplay: {
            scripts: {
                channel_error_title: "먼저 음성 채널에 들어가주세요.",
                song_error_title: "먼저 노래를 재생해주세요.",
                not_found_song_error: "해당 노래를 찾지 못했어요."
            },
            help: {
                name: "재생중",
                description: "현재 재생 중인 음악을 보여줍니다."
            }
        },
        play: {
            scripts: {
                channel_error_title: "먼저 음성 채널에 들어가주세요.",
                song_error_title: "먼저 노래를 재생해주세요.",
                already_play_song: "다른 채널에서 노래를 재생 중이에요.",
                ask_change_channel: "재생 중인 채널을 옮길까요?",
                no_result_error_title: "검색 결과가 없어요.",
                result_embed_title: "\"{0}\" 유튜브 검색 결과예요.",
                menu_placeholder: "재생할 노래를 선택해주세요.",
                change_channel_title: "재생 중인 채널을 옮겼어요.",
                stay_channel_title: "재생 중인 채널에 그대로 있을게요.",
                select_song_title: "선택한 노래를 재생할게요."
            },
            help: {
                name: "재생",
                syntax: ["링크|검색"],
                description: "음악을 재생합니다.",
                aliases: ["ㅔ"]
            }
        },
        queue: {
            scripts: {
                channel_error_title: "먼저 음성 채널에 들어가주세요.",
                song_error_title: "먼저 노래를 재생해주세요.",
                queue_embed_title: "대기열",
                no_title: "제목 없음",
                queue_clear_timeout_title: "1분이 지났어요.\n재시도 해주세요."
            },
            help: {
                name: "대기열",
                description: "대기열을 보여줍니다.",
                aliases: [
                    "대기열",
                    "재생목록"
                ]
            }
        },
        seek: {
            scripts: {
                channel_error_title: "먼저 음성 채널에 들어가주세요.",
                song_error_title: "먼저 노래를 재생해주세요.",
                range_error_title: "노래의 길이를 초과했어요. ({0}초)",
                chapter_error_title: "재생 중인 노래에서 챕터를 찾을 수 없어요.",
                chapter_embed_title: "챕터 선택 메뉴",
                chapter_menu_placeholder: "재생할 챕터를 선택해주세요. {0}",
                song_match_error_title: "재생 중인 노래와 다른 노래에요.",
                select_chapter_title: "{0}가 선택되었어요.",
                select_chapter_description: "{0}(으)로 이동할게요.",
                chapter: "챕터"
            },
            help: {
                name: "이동",
                syntax: ["sec|hh:mm:ss"],
                description: "재생하고 있는 노래의 시간을 이동합니다."
            }
        },
        volume: {
            scripts: {
                channel_error_title: "먼저 음성 채널에 들어가주세요.",
                song_error_title: "먼저 노래를 재생해주세요.",
                range_error_title: "1과 100사이의 정수로 적어주세요.",
                volume_embed_title: "현재 볼륨"
            },
            help: {
                name: "볼륨",
                syntax: ["1~100"],
                description: "노래의 음량을 조절합니다.",
                aliases: ["음량"]
            }
        },
        color: {
            scripts: {
                attachment_error_title: "색상을 추출할 이미지와 함께 보내주세요.",
                attachment_error_description: "`Shift + Win + S`로 부분 스크린샷을 찍을 수 있어요.",
                invalid_input_error_title: "잘못된 입력값이에요.",
                invalid_color_error_title: "유효한 색깔이 아니에요.",
                result_embed_title: "색상 추출",
                unsupported_image_error_title: "지원되지 않는 이미지 형식이에요.",
                image_too_big_error_title: "1MB 이상의 이미지는 불러올 수 없어요."
            },
            help: {
                name: "색",
                syntax: ["hex|r,g,b"],
                description: "색상 코드에 해당하는 색상이나,\n이미지의 좌상단에 해당하는 색상을 보여줘요.",
                aliases: ["색상", "색깔", "컬러"]
            }
        },
        crypto: {
            scripts: {
            },
            help: {
                name: "암호화폐",
                syntax: ["심볼", "단위(시간)"],
                description: "업비트의 암호화폐 정보를 보여줘요.",
                aliases: ["가상화폐", "코인"]
            }
        },
        en2ko: {
            scripts: {
                result_embed_title: "알파벳 -> 한글",
                input_field_title: "입력",
                output_field_title: "출력"
            },
            help: {
                name: "영한",
                syntax: ["글자"],
                description: "<글자>를 영타에서 한타(타자위치)로 변환해요."
            }
        },
        google: {
            help: {
                name: "구글",
                syntax: ["검색어"],
                description: "검색어에 대한 구글링 결과를 보여줘요."
            }
        },
        meal: {
            scripts: {

            },
            help: {
                name: "급식",
                syntax: ["학교"],
                description: "해당 학교의 급식정보를 보여줘요."
            }
        },
        pick: {
            scripts: {
                invalid_input: "잘못된 입력 방식이에요."
            },
            help: {
                name: "선택",
                syntax: ["고를 것들"],
                description: "하나를 랜덤으로 선택해줘요."
            }
        },
        translate: {
            scripts: {
                language: {
                    ko: "한국어",
                    en: "영어",
                    ja: "일본어",
                    "zh-CN": "중국어",
                    "zh-TW": "대만어",
                    es: "스페인어",
                    fr: "프랑스어",
                    ru: "러시아어",
                    vi: "베트남어",
                    th: "태국어",
                    id: "인도네시아어",
                    de: "독일어",
                    it: "이탈리아어",
                },
                target_language: "번역 대상 : {0}",
                result_language: "번역 결과 : {0}",
                result_embed_title: "번역기",
                target_language_placeholder: "번역 대상 언어를 선택해주세요.",
                result_language_placeholder: "번역 결과 언어를 선택해주세요.",
            },
            help: {
                name: "번역",
                syntax: ["글"],
                description: "[글]을 변역해줍니다.",
                aliases: []
            }
        }
    },
    events: {
        messageCreate: {
            arg_violation_title: "잘못된 명령어 사용",
            arg_violation_required: "{0}은(는) 필수 인자에요.",
            arg_violation_expected: "{0}은(는) [{1}]이지만 [{2}]가 입력됐어요.",
            arg_violation_sub_command: "{0} 중에 하나로 입력해주세요.",
            command_execution_error_title: "명령어 실행에 문제가 발생했어요.",
            deprecated_command_title: "사용할 수 없는 명령어",
            deprecated_command_description: "차단되거나 개발중인 명령어에요.",
            insufficient_permissions_title: "사용 권한 부족",
            check_permissions_description: "사용자와 봇에게 아래 권한이 있는지 확인해주세요.\n{0}",
            insufficient_permissions_description: "이 명령어를 사용하기엔 권한이 부족해요.",
            insufficient_permissions_field_user_level: "유저 권한 레벨",
            insufficient_permissions_field_required_level: "필요 권한 레벨",
            command_require_level_1: "\"{0}가입\"을 통해 [User]권한을 받을 수 있어요.",
            command_require_level_2_but_0: "\"{0}가입\" 후 제로 커뮤니티에 들어오시면 [Member]권한을 받을 수 있어요.",
            command_require_level_2_but_1: "제로 커뮤니티에 들어오시면 [Member]권한을 받을 수 있어요.",
            command_require_level_3: "제로봇 개발자 전용 명령어에요."
        },
        interactionCreate: {
            others_interaction_title: "다른 유저의 상호작용이에요.",
            interaction_error_title: "상호작용 중에 문제가 발생했어요."
        }
    },
    etc: {
        select_menu_page_prev_option_label: "이전 페이지",
        select_menu_page_next_option_label: "다음 페이지",
        select_menu_page_option_description: "{0}번째 페이지로 넘어가요.",
        distube_whose_request: "{0}님의 신청곡",
        distube_whose_recommend: "{0}의 추천곡",
        distube_unmanageable_stage_title: "스테이지 관리권한이 없어요.",
        distube_unmanageable_stage_description: "스테이지 관리권한을 추가하거나 발언권 요청을 받아주세요.",
        distube_cannot_send_request_title: "발언권 요청을 보낼 수 없어요.",
        distube_cannot_send_request_description: "everyone으로부터 요청 허용을 켜주세요.",
        distube_empty_queue_title: "대기열이 비었습니다.",
        distube_empty_queue_description: "음성채널에서 나가거나 `{0}끊기` 명령어를 사용해주세요.",
        distube_queued_title: "추가 완료",
        distube_queued_field_value: "플레이리스트",
        distube_queued_description: "**{0}**개의 트랙이 추가 했어요.",
        distube_no_recommend: "추천 영상을 찾을 수 없어요.",
        distube_np_no_song: "현재 재생중인 곡이 없어요.",
        distube_np_current_song: "현재 재생 중인 노래",
        distube_np_volume: "볼륨",
        distube_np_all_songs: "전체 노래",
        distube_np_current_chapter: "현재 재생 중인 챕터",
        distube_np_host: "호스트",
        distube_np_public: "공용",
        distube_np_private: "전용",
        distube_np_shuffle: "셔플",
        distube_np_shuffle_description: "대기열의 노래를 무작위로 섞어요.",
        distube_np_queue_placeholder: "대기열 {0}",
        time_years: "[4|년]",
        time_days: "[3|일]",
        time_hours: "[2|시간]",
        time_mins: "[1|분]",
        time_secs: "[0|초]"
    },
    config: {
        code: "ko",
        country: "KR",
        name: "한국어",
        emoji: "🇰🇷"
    }
} as Ilang;
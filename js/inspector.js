/* =========================================================
   inspector.js — "어떤 오브젝트에 어떤 컴포넌트를 넣어서 이 기능이 됐는지"
   열어 둔 Unity 에디터에서 직접 캡처한 화면(assets/img/<id>/insp-NN.jpg)과 같은 값
   feature : 기능 이름 / go : 하이어라키의 오브젝트 / prefab : 넣은 프리팹
   comps   : [컴포넌트 이름, [[필드, 값], ...]]
   ========================================================= */
window.INSPECTOR = {
  "room103": {
    "scene": "Assets/Scenes/SampleScene.unity",
    "items": [
      {
        "feature": "VR 기본 리그 · 손 추적",
        "icon": "🥽",
        "go": "Complete XR Origin Set Up Hands Variant",
        "prefab": true,
        "note": "빈 VR 템플릿의 기본 XR Origin 대신 Starter Assets 의 Hands Variant 프리팹을 넣어 Near-Far(가까이·멀리 잡기) · Poke(손가락 누르기) · 손 추적을 한 번에 갖춤",
        "comps": [
          [
            "XR Origin",
            [
              [
                "포함",
                "Camera Offset · Main Camera · 양손 컨트롤러"
              ]
            ]
          ],
          [
            "Near-Far Interactor (L/R)",
            [
              [
                "용도",
                "가까이 · 멀리 있는 물건 잡기"
              ]
            ]
          ],
          [
            "XR Poke Interactor (L/R)",
            [
              [
                "용도",
                "키패드 버튼 누르기"
              ]
            ]
          ],
          [
            "Hands Permissions Manager",
            [
              [
                "용도",
                "손 추적 권한 요청 (프리팹)"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "키패드 버튼 누르기",
        "icon": "🔢",
        "go": "bttn0 ~ bttn9 · bttnEnter",
        "note": "버튼을 Select 하면 KeypadButton.OnPressButton() → 숫자는 AddDigit, Enter 는 VerifyCode",
        "comps": [
          [
            "Box Collider",
            []
          ],
          [
            "XR Simple Interactable",
            [
              [
                "Select Mode",
                "Single"
              ],
              [
                "Select Entered ()",
                "KeypadButton.OnPressButton"
              ]
            ]
          ],
          [
            "KeypadButton (Script)",
            [
              [
                "Keypad",
                "Keypad (KeypadManager)"
              ],
              [
                "Button Val",
                "\"1\"  ·  \"Enter\""
              ]
            ]
          ]
        ]
      },
      {
        "feature": "비밀번호 확인 · 문 자동 열림",
        "icon": "🔐",
        "go": "Keypad",
        "note": "입력 · 검사 · 문 열기를 이 한 오브젝트가 담당 — 다른 방에도 값만 바꿔 재사용",
        "comps": [
          [
            "KeypadManager (Script)",
            [
              [
                "Password Screen",
                "DisplayText (TMP_Text)"
              ],
              [
                "Correct Code",
                "1233"
              ],
              [
                "Door Animator",
                "문 (Animator · IsOpen)"
              ],
              [
                "Door Stay Open Time",
                "3"
              ]
            ]
          ],
          [
            "Audio Source",
            [
              [
                "용도",
                "버튼음"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "손잡이 잡고 문 열기",
        "icon": "🚪",
        "go": "Door_Setting",
        "note": "Hinge Joint 로 Y축 0~90° 만 돌게 하고, 위치는 고정 · 회전만 따라오게 잡기",
        "comps": [
          [
            "Rigidbody",
            [
              [
                "Mass",
                "1"
              ],
              [
                "Is Kinematic",
                "☐"
              ]
            ]
          ],
          [
            "Hinge Joint",
            [
              [
                "Axis",
                "X 0  Y 1  Z 0"
              ],
              [
                "Use Limits",
                "☑"
              ],
              [
                "Limits",
                "Min 0  ·  Max 90"
              ]
            ]
          ],
          [
            "XR Grab Interactable",
            [
              [
                "Movement Type",
                "Velocity Tracking"
              ],
              [
                "Track Position",
                "☐"
              ],
              [
                "Track Rotation",
                "☑"
              ],
              [
                "Throw On Detach",
                "☑"
              ]
            ]
          ],
          [
            "Mesh Collider ×3",
            [
              [
                "용도",
                "문 · 손잡이 충돌"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "구급상자 · 물병 꽂기",
        "icon": "🧲",
        "go": "Soket_AidKid · Soket_Bottle",
        "note": "물건(firstaid · waterbottle 프리팹)을 가져다 대면 정해진 자리에 착 붙음",
        "comps": [
          [
            "Box Collider",
            []
          ],
          [
            "XR Socket Interactor",
            [
              [
                "Socket Active",
                "☑"
              ],
              [
                "Show Interactable Hover Meshes",
                "☑"
              ],
              [
                "Hover Socket Snapping",
                "☐"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "물건 잡고 던지기",
        "icon": "📦",
        "go": "box",
        "note": "\"Grab 컴포넌트만 추가되면 다 잡힘\" — Rigidbody + XR Grab Interactable 두 개면 끝",
        "comps": [
          [
            "Rigidbody",
            [
              [
                "Mass",
                "1"
              ],
              [
                "Is Kinematic",
                "☐"
              ]
            ]
          ],
          [
            "Mesh Collider",
            []
          ],
          [
            "XR Grab Interactable",
            [
              [
                "Movement Type",
                "Instantaneous"
              ],
              [
                "Track Position",
                "☑"
              ],
              [
                "Track Rotation",
                "☑"
              ],
              [
                "Throw On Detach",
                "☑"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "텔레포트 이동",
        "icon": "🌀",
        "go": "Floor_01 · Floor_02 · Cylinder · Locomotion",
        "note": "바닥은 아무 데나(Area), 기둥은 정해진 자리로(Anchor) 순간이동",
        "comps": [
          [
            "Teleportation Area",
            [
              [
                "대상",
                "Floor_01, Floor_02"
              ]
            ]
          ],
          [
            "Teleportation Anchor",
            [
              [
                "대상",
                "Cylinder (Capsule Collider)"
              ]
            ]
          ],
          [
            "Locomotion Mediator",
            []
          ],
          [
            "Teleportation Provider",
            [
              [
                "Mediator",
                "Locomotion Mediator"
              ],
              [
                "Delay Time",
                "0"
              ]
            ]
          ],
          [
            "XR Body Transformer",
            [
              [
                "Use Character Controller If Exists",
                "☑"
              ]
            ]
          ]
        ]
      }
    ]
  },
  "beatsync": {
    "scene": "Assets/Scenes/vrTEST.unity",
    "items": [
      {
        "feature": "VR 기본 리그",
        "icon": "🥽",
        "go": "XR Origin (XR Rig)",
        "prefab": true,
        "note": "Camera Offset 아래 Left / Right Controller 에 Poke · Near-Far · Teleport Interactor 가 들어 있는 기본 리그",
        "comps": [
          [
            "XR Origin",
            [
              [
                "Origin Base GameObject",
                "XR Origin (XR Rig)"
              ],
              [
                "Camera Floor Offset",
                "Camera Offset"
              ],
              [
                "Camera",
                "Main Camera"
              ],
              [
                "Camera Y Offset",
                "1.36144"
              ]
            ]
          ],
          [
            "Character Controller",
            [
              [
                "Slope Limit",
                "45"
              ],
              [
                "Step Offset",
                "0.5"
              ],
              [
                "Radius",
                "0.1"
              ],
              [
                "Height",
                "1.36144"
              ]
            ]
          ],
          [
            "XR Input Modality Manager",
            [
              [
                "Left Controller",
                "Left Controller"
              ],
              [
                "Right Controller",
                "Right Controller"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "광선검으로 노트 베기",
        "icon": "⚔️",
        "go": "Left Controller › SaberRed-L",
        "note": "왼손 컨트롤러의 자식으로 붙여 손을 그대로 따라가고, Layer Red 노트만 판정",
        "comps": [
          [
            "Transform",
            [
              [
                "Scale",
                "0.001 · 0.001 · 2 (긴 막대)"
              ]
            ]
          ],
          [
            "Box Collider",
            [
              [
                "Is Trigger",
                "☐"
              ],
              [
                "Size",
                "1 · 1 · 1"
              ]
            ]
          ],
          [
            "Saber (Script)",
            [
              [
                "Layer",
                "Red"
              ],
              [
                "Min Swing Speed",
                "0.5"
              ]
            ]
          ],
          [
            "Mesh Renderer",
            [
              [
                "Material",
                "SabaRed"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "박자에 맞춰 노트 생성",
        "icon": "🎵",
        "go": "spawnPivot › NoteSpawner",
        "prefab": true,
        "note": "spawnPivot 프리팹 안에서 빨강 · 파랑 노트를 격자 위치에 생성",
        "comps": [
          [
            "Note Spawner (Script)",
            [
              [
                "Red Note",
                "redNote"
              ],
              [
                "Blue Note",
                "blueNote"
              ],
              [
                "Note Speed",
                "5"
              ],
              [
                "Col Spacing",
                "0.6"
              ],
              [
                "Row Spacing",
                "0.5"
              ],
              [
                "Bottom Y",
                "-0.39"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "점수 · 게임 흐름",
        "icon": "🧮",
        "go": "Manager › GM",
        "note": "GameRule.md 의 점수 규칙이 Score System 인스펙터 값 그대로",
        "comps": [
          [
            "Audio Source",
            [
              [
                "Audio Generator",
                "song"
              ],
              [
                "Play On Awake",
                "☐"
              ]
            ]
          ],
          [
            "GM (Script)",
            [
              [
                "Player",
                "Main Camera"
              ],
              [
                "Miss Margin",
                "1"
              ],
              [
                "Auto Return Delay",
                "3"
              ]
            ]
          ],
          [
            "Music Player (Script)",
            [
              [
                "Schedule Delay",
                "0.1"
              ]
            ]
          ],
          [
            "Score System (Script)",
            [
              [
                "First Hit Points",
                "5"
              ],
              [
                "Combo Hit Points",
                "7"
              ],
              [
                "Miss Penalty",
                "5"
              ],
              [
                "First Level Up Score",
                "200"
              ],
              [
                "Level Up Multiplier",
                "2"
              ],
              [
                "Game Over Consecutive Miss",
                "3"
              ]
            ]
          ],
          [
            "Game State Activator (Script)",
            []
          ]
        ]
      },
      {
        "feature": "VR UI · 머리 따라오는 캔버스",
        "icon": "🖥️",
        "go": "Canvas",
        "note": "World Space 캔버스를 Lazy Follow 로 카메라 앞 10m 에 부드럽게 붙임",
        "comps": [
          [
            "Canvas",
            [
              [
                "Render Mode",
                "World Space"
              ],
              [
                "Event Camera",
                "Main Camera"
              ]
            ]
          ],
          [
            "Canvas Scaler",
            [
              [
                "Dynamic Pixels Per Unit",
                "1"
              ],
              [
                "Reference Pixels Per Unit",
                "100"
              ]
            ]
          ],
          [
            "Lazy Follow",
            [
              [
                "Target",
                "Main Camera"
              ],
              [
                "Target Offset",
                "0 · 0 · 10"
              ],
              [
                "Movement Speed",
                "6"
              ],
              [
                "Position Follow Mode",
                "Follow"
              ],
              [
                "Rotation Follow Mode",
                "Look At"
              ]
            ]
          ],
          [
            "Tracked Device Graphic Raycaster",
            [
              [
                "용도",
                "컨트롤러로 UI 클릭"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "타격 이펙트 · 판정 문구",
        "icon": "✨",
        "go": "Manager › EffectManager",
        "comps": [
          [
            "Effect Manager (Script)",
            [
              [
                "Ring Scale / Duration",
                "1.4 / 0.35"
              ],
              [
                "Punch Scale",
                "1.15"
              ],
              [
                "Blink Count",
                "2"
              ],
              [
                "Hit Effect Prefab",
                "CFXR4 Firework 1 Cyan-Purple"
              ],
              [
                "Go Effect Prefab",
                "CFXR3 Shield Leaves A"
              ],
              [
                "Grade Size / Duration",
                "3 / 0.6"
              ],
              [
                "Marvelous · Perfect · Great · Miss",
                "노랑 · 하늘 · 초록 · 빨강"
              ]
            ]
          ]
        ]
      }
    ]
  },
  "tps": {
    "scene": "Assets/Scenes/Play.unity",
    "items": [
      {
        "feature": "3인칭 추적 카메라",
        "icon": "🎥",
        "go": "[Camera] › FollowCamera",
        "comps": [
          [
            "Cinemachine Camera",
            [
              [
                "Lens (FOV)",
                "34.8"
              ],
              [
                "Tracking Target",
                "CamPivot"
              ],
              [
                "Position Control",
                "Third Person Follow"
              ],
              [
                "Rotation Control",
                "Rotation Composer"
              ]
            ]
          ],
          [
            "Cinemachine Third Person Follow",
            [
              [
                "Shoulder Offset",
                "0.52 · -1.22 · -1.47"
              ],
              [
                "Camera Side",
                "1"
              ],
              [
                "Camera Distance",
                "0.32"
              ]
            ]
          ],
          [
            "Cinemachine Rotation Composer",
            [
              [
                "Target Offset",
                "0 · -1.46 · 60.2"
              ],
              [
                "Center On Activate",
                "☑"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "스코프 줌",
        "icon": "🔭",
        "go": "Gun › ScopeCam",
        "note": "평소엔 꺼 두고, 스코프 버튼을 누르면 켜져서 RenderTexture 로 확대 화면을 그림",
        "comps": [
          [
            "Camera",
            [
              [
                "Projection",
                "Perspective"
              ],
              [
                "Field of View",
                "10"
              ],
              [
                "Clipping Planes",
                "Near 0.3 · Far 1000"
              ],
              [
                "Output Texture",
                "ScopeRT"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "고블린 길찾기",
        "icon": "🧭",
        "go": "[Environment] › NavMesh Surface",
        "comps": [
          [
            "NavMesh Surface",
            [
              [
                "Agent Type",
                "Humanoid"
              ],
              [
                "Default Area",
                "Walkable"
              ],
              [
                "Use Geometry",
                "Render Meshes"
              ],
              [
                "NavMesh Data",
                "NavMesh-NavMesh Surface (Bake 완료)"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "웨이브 생성",
        "icon": "👹",
        "go": "[Spawners] › GoblinSpawn",
        "comps": [
          [
            "Goblin Spawn (Script)",
            [
              [
                "Goblin Prefab",
                "Goblin-MMMain"
              ],
              [
                "Goblin Datas",
                "3 (ScriptableObject)"
              ],
              [
                "Spawn Points",
                "3"
              ],
              [
                "Spawn Effect",
                "CFXR Electrified 3"
              ],
              [
                "Max Wave",
                "10"
              ],
              [
                "Cnt Per Wave",
                "10"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "아이템 생성",
        "icon": "🎁",
        "go": "[Spawners] › ItemSpawn",
        "comps": [
          [
            "Item Spawn (Script)",
            [
              [
                "Items",
                "4 (탄약 · 수류탄 · 체력 · 코인)"
              ],
              [
                "Player Transform",
                "Player"
              ],
              [
                "Max Distance",
                "5"
              ],
              [
                "Time Bet Spawn Min / Max",
                "2 / 7"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "총 · 사격",
        "icon": "🔫",
        "go": "GunPivot › Gun",
        "prefab": true,
        "comps": [
          [
            "Gun (Script)",
            [
              [
                "Fire Transform",
                "FirePivot"
              ],
              [
                "Muzzle Fx",
                "MuzzleFlashEffect"
              ],
              [
                "Shell Fx",
                "ShellEjectEffect"
              ],
              [
                "Gun Data",
                "Gun Data (ScriptableObject)"
              ],
              [
                "Ammo Remain",
                "100"
              ],
              [
                "Scope Cam",
                "ScopeCam"
              ]
            ]
          ],
          [
            "Line Renderer",
            [
              [
                "용도",
                "총알 궤적"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "플레이어 조작 · 애니메이션",
        "icon": "🏃",
        "go": "DefaultMalePolyart",
        "prefab": true,
        "comps": [
          [
            "Animator",
            [
              [
                "Controller",
                "AssaultRifleAnimator"
              ],
              [
                "Avatar",
                "DefaultCharacterMeshPolyartAvatar"
              ],
              [
                "Apply Root Motion",
                "☐"
              ]
            ]
          ],
          [
            "Rigidbody",
            [
              [
                "Mass",
                "1"
              ],
              [
                "Use Gravity",
                "☑"
              ],
              [
                "Interpolate",
                "Interpolate"
              ]
            ]
          ],
          [
            "Capsule Collider",
            [
              [
                "Radius",
                "0.51"
              ],
              [
                "Height",
                "1.68"
              ]
            ]
          ],
          [
            "Player Shooter (Script)",
            [
              [
                "Gun",
                "Gun"
              ],
              [
                "Left / Right Hand Mount",
                "LeftPivot / RightPivot"
              ],
              [
                "Upper Layer Index",
                "1"
              ],
              [
                "Upper Layer Blend Speed",
                "8"
              ]
            ]
          ]
        ]
      }
    ]
  },
  "bowling": {
    "scene": "Assets/씬/BowlingGame.unity",
    "items": [
      {
        "feature": "VR 기본 리그 · 손 추적",
        "icon": "🥽",
        "go": "[Characters] › Complete XR Origin Set Up Hands Variant",
        "prefab": true,
        "note": "손 추적과 컨트롤러를 모두 쓰는 Hands Variant 프리팹",
        "comps": [
          [
            "XR Origin",
            [
              [
                "Camera Floor Offset",
                "Camera Offset"
              ],
              [
                "Camera",
                "Main Camera"
              ],
              [
                "Camera Y Offset",
                "1.36144"
              ]
            ]
          ],
          [
            "Character Controller",
            [
              [
                "Radius",
                "0.1"
              ],
              [
                "Height",
                "0.8"
              ]
            ]
          ],
          [
            "XR Input Modality Manager",
            [
              [
                "Left / Right Hand",
                "Left Hand / Right Hand"
              ],
              [
                "Left / Right Controller",
                "Left Controller / Right Controller"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "공 거치대 (소켓)",
        "icon": "🎳",
        "go": "[Spawners] › 소켓",
        "comps": [
          [
            "Ball Spawner (Script)",
            [
              [
                "Prefabs",
                "BALL ~ BALL (4) · 5개"
              ],
              [
                "Sockets",
                "Soket ~ Soket (4) · 5개"
              ],
              [
                "Respawn Delay",
                "0.5"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "공 잡고 던지기",
        "icon": "🤾",
        "go": "BALL (Prefab Asset)",
        "prefab": true,
        "note": "Velocity Tracking 으로 손 속도를 그대로 공에 실어 던짐",
        "comps": [
          [
            "Sphere Collider",
            [
              [
                "Radius",
                "0.5"
              ]
            ]
          ],
          [
            "Ball (Script)",
            [
              [
                "Leave Socket Distance",
                "0.2"
              ],
              [
                "Destroy Y Limit",
                "-10"
              ],
              [
                "Max Distance",
                "30"
              ],
              [
                "Max Seconds After Throw",
                "30"
              ]
            ]
          ],
          [
            "Rigidbody",
            [
              [
                "Mass",
                "6"
              ],
              [
                "Interpolate",
                "Interpolate"
              ],
              [
                "Collision Detection",
                "Continuous Dynamic"
              ]
            ]
          ],
          [
            "XR Grab Interactable",
            [
              [
                "Movement Type",
                "Velocity Tracking"
              ],
              [
                "Track Position / Rotation",
                "☑ / ☑"
              ],
              [
                "Throw On Detach",
                "☑"
              ],
              [
                "Throw Velocity Scale",
                "2"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "핀 · 쓰러짐 판정",
        "icon": "📍",
        "go": "[Spawners] › 핀 › Pin",
        "note": "핀(PinSpawner) 아래 pinspawnPivot 10자리에 Pin 을 세움",
        "comps": [
          [
            "Mesh Collider",
            [
              [
                "Convex",
                "☑"
              ]
            ]
          ],
          [
            "Box Collider",
            [
              [
                "Is Trigger",
                "☑ (머리 판정)"
              ]
            ]
          ],
          [
            "Pin (Script)",
            [
              [
                "Unfreeze Margin",
                "0.05"
              ],
              [
                "Fallen Angle",
                "45"
              ]
            ]
          ],
          [
            "Rigidbody",
            [
              [
                "Mass",
                "1"
              ],
              [
                "Use Gravity",
                "☑"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "박자에 맞춰 반짝이는 조명",
        "icon": "💡",
        "go": "[Managers] › RhythmBeatSaga",
        "comps": [
          [
            "Beat Sage Lights (Script)",
            [
              [
                "Music",
                "SoundManager (Audio Source)"
              ],
              [
                "Song Maps",
                "6"
              ],
              [
                "Ceiling Effects",
                "1"
              ],
              [
                "Off Level / On Chance",
                "0.1 / 0.5"
              ],
              [
                "Hold Portion",
                "0.3"
              ],
              [
                "Rise Time",
                "0.03"
              ],
              [
                "Restore When Quiet",
                "☑"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "머리를 따라오는 점수판",
        "icon": "🧾",
        "go": "[UI] › CanvasScore",
        "comps": [
          [
            "Canvas",
            [
              [
                "Render Mode",
                "World Space"
              ],
              [
                "Event Camera",
                "Main Camera"
              ]
            ]
          ],
          [
            "Tracked Device Graphic Raycaster",
            []
          ],
          [
            "Lazy Follow",
            [
              [
                "Target",
                "Main Camera"
              ],
              [
                "Target Offset",
                "0 · 0 · 3"
              ],
              [
                "Movement Speed",
                "6"
              ],
              [
                "Rotation Follow Mode",
                "Look At"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "레벨 · 기회 · 제한 시간",
        "icon": "🏆",
        "go": "[Managers] › levelmanager",
        "comps": [
          [
            "Level Manager (Script)",
            [
              [
                "Max Level",
                "10"
              ],
              [
                "Score Per Level",
                "500"
              ],
              [
                "Max One More Per Level",
                "3"
              ],
              [
                "Settle Time",
                "1.5"
              ],
              [
                "Miss Time",
                "8"
              ],
              [
                "Ball Spawner / Pin Root",
                "소켓 / 핀"
              ],
              [
                "Throw Time Limit",
                "30"
              ],
              [
                "One More Message",
                "ONE MORE!"
              ]
            ]
          ]
        ]
      }
    ]
  },
  "graze": {
    "scene": "Assets/Scene/mmain.unity",
    "items": [
      {
        "feature": "맵 회전",
        "icon": "🔄",
        "go": "spinPivot",
        "note": "MAPS(Player · EnemyBox · Map)가 모두 자식이라 섬 전체가 함께 돌아감",
        "comps": [
          [
            "Rotator (Script)",
            [
              [
                "Speed",
                "10"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "플레이어 이동 · 점프",
        "icon": "🕹️",
        "go": "MAPS › Player",
        "prefab": true,
        "comps": [
          [
            "Animator",
            [
              [
                "Controller",
                "SwordAndShieldStance"
              ]
            ]
          ],
          [
            "Player Input (Script)",
            [
              [
                "Speed",
                "5"
              ],
              [
                "Skin Width",
                "0.05"
              ],
              [
                "Step Height",
                "0.3"
              ],
              [
                "Joy",
                "Dynamic Joystick"
              ],
              [
                "Jump Power",
                "6"
              ],
              [
                "Gravity",
                "15"
              ],
              [
                "Jump Clip",
                "Jump"
              ]
            ]
          ],
          [
            "Rigidbody",
            [
              [
                "Use Gravity",
                "☐"
              ],
              [
                "Is Kinematic",
                "☑ (중력은 스크립트로)"
              ]
            ]
          ],
          [
            "Capsule Collider",
            [
              [
                "Radius",
                "0.34"
              ],
              [
                "Height",
                "1.45"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "탄 발사 (보물상자 몬스터)",
        "icon": "💥",
        "go": "MAPS › EnemyBox ×4",
        "prefab": true,
        "comps": [
          [
            "Animator",
            [
              [
                "Controller",
                "ChestMonster"
              ]
            ]
          ],
          [
            "Bullet Spawner (Script)",
            [
              [
                "Bullet Prefab",
                "Enemy Variant"
              ],
              [
                "Fire Point",
                "firePoint"
              ],
              [
                "Spawn Rate Min / Max",
                "0.5 / 3"
              ],
              [
                "Fire Delay",
                "0.53"
              ]
            ]
          ],
          [
            "Rigidbody",
            []
          ],
          [
            "Box Collider",
            []
          ]
        ]
      },
      {
        "feature": "생존 시간 · 게임오버",
        "icon": "⏱️",
        "go": "GameManager",
        "comps": [
          [
            "Game Manager (Script)",
            [
              [
                "Game Over UI",
                "GameoverUI"
              ],
              [
                "Time Text",
                "TimeText"
              ],
              [
                "Record Text",
                "RecordText"
              ],
              [
                "Jump Button",
                "JumpButton"
              ],
              [
                "Bullet Spawner",
                "EnemyBox"
              ]
            ]
          ]
        ]
      }
    ]
  },
  "bunny": {
    "scene": "Assets/Scene/Main.unity",
    "items": [
      {
        "feature": "토끼 달리기 · 점프",
        "icon": "🐰",
        "go": "Player",
        "comps": [
          [
            "Rigidbody 2D",
            [
              [
                "용도",
                "linearVelocity 로 점프"
              ]
            ]
          ],
          [
            "Circle Collider 2D",
            []
          ],
          [
            "Animator",
            [
              [
                "States",
                "Run · Jump · Die · Attack"
              ]
            ]
          ],
          [
            "Audio Source",
            []
          ],
          [
            "Player (Script)",
            [
              [
                "Jump Force",
                "700"
              ],
              [
                "Carrot Prefab",
                "CarrotProjectile"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "발판 무한 생성 (오브젝트 풀)",
        "icon": "🧱",
        "go": "PlatformSpawner",
        "comps": [
          [
            "PlatformSpawner (Script)",
            [
              [
                "Count",
                "3"
              ],
              [
                "Time Bet Spawn Min / Max",
                "1.25 / 2.25"
              ],
              [
                "Y Min / Max",
                "-3.5 / 1.5"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "배경 반복 스크롤",
        "icon": "🌄",
        "go": "Sky ×3 · Start Platform ×3",
        "comps": [
          [
            "BackgroundLoop (Script)",
            []
          ],
          [
            "ScrollingObject (Script)",
            [
              [
                "용도",
                "왼쪽으로 이동"
              ]
            ]
          ]
        ]
      },
      {
        "feature": "게임 · 레벨 · 씬 관리",
        "icon": "🧭",
        "go": "GameManager · LevelManagerobj · SceneChange",
        "comps": [
          [
            "GM (Script)",
            []
          ],
          [
            "LM (Script)",
            []
          ],
          [
            "SCM (Script)",
            []
          ]
        ]
      },
      {
        "feature": "공격 버튼 물결 효과",
        "icon": "🫧",
        "go": "AttackButton",
        "comps": [
          [
            "PressRippleEffect (Script)",
            [
              [
                "GC",
                "UniTask 로 할당 없이"
              ]
            ]
          ]
        ]
      }
    ]
  }
};

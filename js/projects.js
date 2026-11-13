/* =========================================================
   projects.js — 포트폴리오에 보여줄 내용 (이 파일만 고치면 사이트가 바뀜)
   ---------------------------------------------------------
   · play     : 플레이 링크 (GameJolt 등)
   · youtube  : 유튜브 영상 ID 또는 주소 (비어 있으면 '영상 준비 중' 칸)
   · images   : assets/img/<id>/ 안의 파일 이름 (비어 있으면 캡처 자리 표시)
   · code     : 실제 소스에서 가져온 핵심 부분 (path 는 GitHub 저장소 기준)
   ========================================================= */

const PROFILE = {
  name: '진미',
  role: 'Game · XR',
  motto: '배움은 다양하게, 나눔은 넓게',
  github: 'mijin1996',
  mail: 'unidevpeer@gmail.com',
  education: [{ when: '2026.03 ~ 2026.12', what: '한국폴리텍대학 광명 · 증강현실시스템과' }],
  experience: [
    { when: '2023.07 ~ 2024.07', what: '보육교사' },
    { when: '2023.06 ~ 2024.07', what: '버넥트 팀프로젝트 · 비공식 참여' },
  ],
  stack: ['C', 'C#', 'Java', 'JavaScript', 'Unity', 'XR Toolkit', 'Photoshop', 'Premiere', '3ds Max', 'Figma'],
  about: [
    '광명폴리텍 교육원에서 UI 설계와 게임 개발을 배웠습니다.',
    'C, C#, Java, Unity, Photoshop/Premiere, 3ds Max, Figma로 팀·개인 프로젝트를 완성하며 실무 역량을 다졌습니다.',
    '어려운 문제에 부딪힐 때마다 더 잘해내고 싶다는 열정이 커졌고, AI 활용과 반복적인 코드 리뷰로 코드 작성법을 익혔습니다.',
    '배움으로 다진 기술로 세상에 올바른 가치와 선한 영향력을 전하고 싶습니다.',
  ],
};

const GH = 'https://github.com/mijin1996/';

const PROJECTS = [
  /* ---------------------------------------------------------- DodgeGraze */
  {
    id: 'graze',
    scene: 'Assets/Scene/mmain.unity',
    shots: [
      ['몬스터 탄 발사 · 충돌', 'dodge.png'],
      ['플레이어 이동 · 발소리', 'dodge_player.png'],
      ['플레이어 애니메이터', 'dodge_player_ani.png'],
    ],
    group: 'unity',
    file: 'DodgeGraze.unity',
    title: 'DodgeGraze',
    tagline: '탄막을 살짝 스치며(Graze) 끝까지 버티는 3D 닷지 게임',
    tags: ['Unity 6', '3D', 'C#', 'Mobile', 'UniTask'],
    engine: 'Unity 6000.6.7f1',
    platform: 'Android · PC',
    role: '개인 · 기획 / 프로그래밍 / 스토어 아트',
    period: '2026.04 ~ 2026.06',
    commits: 17,
    repo: GH + 'game-GRAZE',
    local: 'D:\\mj_Unity\\game-GRAZE',
    play: 'https://gamejolt.com/games/DodgeGraze/1111584',
    youtube: 'https://youtu.be/kP3gUjWLh4U',
    images: ['00.jpg', '03.jpg', '04.jpg', '05.jpg', '01.jpg', '02.jpg'],
    icon: 'icon.png',
    notion: {
      "intent": [
        "간단한 조작만으로도 긴장감 있는 플레이를 경험할 수 있는 3D 회피 게임을 기획",
        "장애물을 피하며 생존 시간을 늘리고 최고 기록에 도전하는 재미를 유도"
      ],
      "work": [
        {
          "t": "맵 회전",
          "tech": [],
          "items": [
            "맵의 회전을 추가하여 지루함을 삭제"
          ]
        },
        {
          "t": "플레이어 이동 및 장애물 회피",
          "tech": [
            "Collider",
            "OnTriggerEnter"
          ],
          "items": [
            "Collider(IsTrigger → OnTriggerEnter)를 이용한 충돌 판정",
            "Tag가 player일 시 게임오버 처리"
          ]
        },
        {
          "t": "공격물 생성",
          "tech": [
            "Prefab",
            "Instantiate()"
          ],
          "items": [
            "LookAt을 사용하여 target을 player로 설정",
            "공격물 스포너가 player를 향해 공격물을 일정 시간마다 반복 스폰"
          ]
        },
        {
          "t": "점수 시스템",
          "tech": [
            "Coroutine",
            "Time"
          ],
          "items": [
            "생존 시간에 따라 점수 증가, Text UI로 실시간 체크",
            "최고 점수 저장 → Player Die일 때 EndUI 활성화, 점수 출력"
          ]
        }
      ],
      "retro": [
        "배운 내용에 충실했고 캐릭터도 LookRotation과 점프의 움직임이 모두 자연스러움.",
        "다만, 폰트나 Intro, Gameover 배경 화면이 너무 학생이 만든 티가 나서 변경 및 수정이 필요"
      ]
    },
    plan: {
      goal: '사방에서 날아오는 탄을 피하면서 오래 살아남는 짧은 세션형 모바일 게임',
      points: [
        '조이스틱으로 이동, 버튼으로 점프 — 한 손으로도 할 수 있는 조작',
        '스포너가 0.5~3초 사이 랜덤 간격으로 플레이어를 조준해 발사',
        '건물·나무 사이를 지나가며 피하는 3D 맵',
        'GameJolt · itch.io · Play Console 용 스토어 이미지까지 직접 제작',
      ],
      problem: '캐릭터를 Translate로 움직이니 건물을 뚫고 지나가고, 바닥에 붙여 쏜 SphereCast는 바닥을 먼저 맞혀 벽을 찾지 못했다.',
      decision: '발밑에서 stepHeight만큼 띄운 구를 이동 방향으로 쏘고, 내 몸 · 이미 겹친 것 · 발밑 바닥은 건너뛰도록 걸렀다.',
      result: '점프 중에도 건물·나무를 통과하지 않고, 낮은 턱은 그대로 지나가는 이동이 됐다.',
    },
    tree: `Assets/
├─ Scrips/
│  ├─ PlayerInput.cs      # 조이스틱 이동 · 벽 검사(SphereCast) · 점프 · 중력
│  ├─ BulletSpawner.cs    # 랜덤 주기로 플레이어 조준 발사
│  ├─ Bullet.cs           # 탄 이동 · 충돌 시 Die()
│  ├─ GameManager.cs      # 생존 시간 · 최고 기록 · 재시작
│  ├─ Move_n_Rotate.cs    # 움직이는 장애물
│  ├─ Rotator.cs
│  └─ SceneChange.cs
├─ Joystick Pack/         # 모바일 가상 조이스틱
└─ StoreImages/           # gamejolt · itchio · playconsole · logo`,
    setup: [
      ['Unity', '6000.6.7f1 (Unity 6)'],
      ['입력', 'Joystick Pack (Floating) + PC 테스트용 WASD · Space'],
      ['비동기', 'UniTask — Package Manager › Add from git URL'],
      ['이펙트', 'Cartoon FX Remaster (CFXR), Toony Colors Pro, KinoBloom'],
      ['빌드', 'Android (Play Console) · WebGL'],
    ],
    steps: [
      'Window › Package Manager › + › Add package from git URL',
      'https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask',
      'Player 오브젝트: Rigidbody + CapsuleCollider + PlayerInput, joy 칸에 Floating Joystick 연결',
      'BulletSpawner: bulletPrefab · firePoint 연결 (target은 PlayerInput을 자동으로 찾음)',
    ],
    code: [
      {
        name: 'PlayerInput.cs',
        path: 'Assets/Scrips/PlayerInput.cs',
        lang: 'cs',
        note: '발밑에서 띄운 구를 앞으로 쏴서 벽을 미리 검사',
        src: String.raw`// 발밑에서 stepHeight만큼 띄운 구를 앞으로 쏴서 벽이 있는지 검사
// (바닥에 닿은 채로 검사하면 바닥이 먼저 맞아서 벽을 못 찾기 때문에 띄워서 쏨)
bool IsBlocked(Vector3 dir, float distance) {
    Bounds b = body.bounds;                       // 월드 기준 크기 (스케일 반영)
    float radius = b.extents.x * 0.8f;            // 몸보다 살짝 작은 구
    float feet = b.min.y;
    Vector3 origin = new Vector3(b.center.x, feet + stepHeight + radius, b.center.z);
    float castDist = distance + skinWidth + (b.extents.x - radius);

    foreach (RaycastHit hit in Physics.SphereCastAll(origin, radius, dir, castDist, ~0, QueryTriggerInteraction.Ignore)) {
        if (hit.collider.attachedRigidbody == rb) { continue; } // 내 몸
        if (hit.distance <= 0f) { continue; }                   // 이미 겹쳐 있으면 빠져나갈 수 있게
        if (hit.normal.y >= 0.7f && hit.point.y <= feet + stepHeight) { continue; } // 발밑 바닥만 통과
        return true;   // 위의 세 경우가 아니면 "벽이다, 멈춰라"
    }
    return false;
}

void Update() {
    Vector3 move = new Vector3(joy.Horizontal, 0, joy.Vertical);
    if (move == Vector3.zero) {
        move = new Vector3(Input.GetAxisRaw("Horizontal"), 0, Input.GetAxisRaw("Vertical"));
    }
    if (move != Vector3.zero) {
        transform.rotation = Quaternion.LookRotation(move);
        float step = speed * Time.deltaTime;
        if (!IsBlocked(transform.forward, step)) {
            transform.Translate(Vector3.forward * step);
        }
        ani.SetBool("Walk", true);
    }
    // ...
}`,
      },
      {
        name: 'BulletSpawner.cs',
        path: 'Assets/Scrips/BulletSpawner.cs',
        lang: 'cs',
        note: '랜덤 주기로 플레이어를 바라보고 발사',
        src: String.raw`void Start() {
    timeAfterSpawn = 0f;
    spawnRate = Random.Range(spawnRateMin, spawnRateMax);
    target = FindFirstObjectByType<PlayerInput>().transform;
    ani = GetComponent<Animator>();
}

void Update() {
    timeAfterSpawn += Time.deltaTime;

    if (timeAfterSpawn >= spawnRate) {
        timeAfterSpawn = 0f; // 최근 생성 시점에서 경과한 누적 시간 초기화

        GameObject bulletObj = Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
        bulletObj.transform.LookAt(target);
        if (ani != null) { ani.SetTrigger("Attack"); } // 발사하는 순간 Taunting 재생
        spawnRate = Random.Range(spawnRateMin, spawnRateMax); // 재생성 주기 랜덤화
    }
}`,
      },
    ],
  },

  /* ---------------------------------------------------------- BunnyRunning */
  {
    id: 'bunny',
    dir: '2D',
    scene: 'Assets/Scene/Main.unity',
    shots: [
      ['플레이어 · 점프', '2d_player.png'],
      ['스프라이트 자르기 (Sprite Editor)', '2d_player_sprite.png'],
      ['발판 · 코인 · 달팽이 프리팹', '2d_platform.png'],
      ['발판 생성 (PlatformSpawner)', '2d_platformSpawner.png'],
      ['게임 관리 (GameManager)', '2d_gameManager.png'],
      ['인트로 화면', '2d_intro_manager_game.png'],
      ['씬 전환 (SceneChange)', '2d_intro_manager_SceneChanger.png'],
    ],
    group: 'unity',
    file: 'BunnyRunning.unity',
    title: 'BunnyRunning',
    tagline: '발판을 건너뛰며 코인을 모으는 2D 사이드스크롤 러너',
    tags: ['Unity 6', '2D', 'C#', 'Object Pool'],
    engine: 'Unity 6000.5.3f1',
    platform: 'PC · Mobile (가로)',
    role: '개인 · 기획 / 프로그래밍 / UI',
    period: '2026.06 ~ 2026.07',
    commits: 15,
    repo: GH + 'game-2D',
    local: 'D:\\mj_Unity\\game-2D',
    play: 'https://gamejolt.com/games/2D-SideScroll/1108632',
    youtube: 'https://youtu.be/2xVMJ5_0ayw',
    images: ['00.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
    notion: {
      "intent": [
        "누구나 쉽게 즐길 수 있는 캐주얼 2D 러닝 게임을 목표",
        "계속되는 스테이지와 장애물을 통해 도전 욕구와 몰입감을 유도"
      ],
      "work": [
        {
          "t": "무한 스테이지 생성",
          "tech": [
            "Prefab",
            "Object Pooling"
          ],
          "items": [
            "2D 횡스크롤 방식 구현 (반복적 배경 생성)"
          ]
        },
        {
          "t": "플레이어 이동 및 애니메이션",
          "tech": [
            "Rigidbody2D",
            "Animator"
          ],
          "items": [
            "GetKeyDown으로 터치나 커서를 통해 점프 구현",
            "Run, Jump, Die 애니메이션 상태 전환",
            "플레이어 사망 시 게임 종료 → 게임종료 UI → Home / Replay 버튼 생성"
          ]
        },
        {
          "t": "코인 및 장애물 시스템",
          "tech": [
            "Collider2D",
            "ObjectTag"
          ],
          "items": [
            "코인 획득 시 점수 증가 및 획득 이펙트 출력",
            "달팽이 장애물이 플랫폼 위를 순찰하도록 구현",
            "충돌(tag.player) 시 게임오버 처리"
          ]
        }
      ],
      "retro": [
        "버튼을 눌러서 생기는 이펙트를 UniTask로 하여 GC가 남지 않도록 함.",
        "다만 레벨에 따른 다음 스테이지 적용을 하지 못해 아쉽고 게임이 단조로워 심심함."
      ]
    },
    plan: {
      goal: '토끼가 끝없이 이어지는 발판 위를 달리며 달팽이를 피하고 코인을 모으는 러너',
      points: [
        '터치 / Space로 점프, 공중에서 최대 5단 점프, 손을 떼면 짧은 점프',
        'A키 / 공격 버튼으로 당근 발사 → 달팽이(IDamageable) 처치',
        '발판은 미리 만들어 둔 것을 재사용(오브젝트 풀)해서 생성 비용 없음',
        'GM · SM · AM · LM · SCM 매니저로 게임 흐름 · 사운드 · 씬을 나눔',
      ],
      problem: '처음엔 시작할 때 발판 3개의 종류를 한 번만 랜덤으로 정해서, 코인 발판만 뽑히면 게임 내내 달팽이가 나오지 않았다.',
      decision: '종류별(달팽이 · 코인) 풀을 따로 만들고, 배치할 때마다 bag에서 종류를 골라 규칙적인 랜덤이 되게 바꿨다.',
      result: '한 판 안에서 달팽이와 코인이 고르게 섞여 나온다.',
    },
    tree: `Assets/cs/
├─ Manager/  GM.cs · SM.cs · AM.cs · LM.cs · SCM.cs
├─ Player/   Player.cs · PlayerInput.cs · CarrotProjectile.cs
├─ Enemy/    SnailPatrol.cs
├─ Effect/   BlinkEffect · FloatEffect · PulseEffect · PressRippleEffect
├─ Interface/ IDamageable.cs · IEffect.cs
├─ Background/ BackgroundLoop.cs · ScrollingObject.cs
├─ PlatformSpawner.cs   # 종류별 발판 풀 + 규칙적인 랜덤 배치
├─ Platform.cs · Coin.cs
└─ LandscapeMode.cs     # 모바일 가로 고정`,
    setup: [
      ['Unity', '6000.5.3f1 (Unity 6)'],
      ['입력', 'Input System 1.19 — PlayerInput.cs 에서 터치 · 키보드 통합'],
      ['물리', 'Rigidbody2D linearVelocity, 바닥 판정은 contact normal.y > 0.7'],
      ['UI', 'FloatingTextEngineLite (점수 팝업)'],
      ['빌드', 'PC · WebGL · Android 가로'],
    ],
    steps: [
      'PlatformSpawner: platformSnailPrefab · platformCoinPrefab 연결, count = 3',
      'Player 태그 Dead 인 장애물과 닿으면 Die() → GM.ins.OnPlayerDead()',
      'Project Settings › Player › Orientation: Landscape',
    ],
    code: [
      {
        name: 'BackgroundLoop.cs',
        path: 'Assets/cs/Background/BackgroundLoop.cs',
        lang: 'cs',
        note: '배경 한 장으로는 화면이 다 덮이지 않아, 3장을 이어 두고 왼쪽으로 다 지나간 장만 맨 뒤로 옮겨 빈틈 없이 반복',
        src: String.raw`using UnityEngine;

public class BackgroundLoop : MonoBehaviour {
    private float imgWidth;

    private void Awake() {
        // 가로 길이를 측정하는 처리
        BoxCollider2D backgroundCollider = GetComponent<BoxCollider2D>();
        imgWidth = backgroundCollider.size.x;
    }

    private void Update() {
        // 현재 위치가 원점에서 왼쪽으로 imgWidth 이상 이동했을때 위치를 리셋
        if (transform.position.x <= -imgWidth) { Reposition(); }  //-width는 -100과 같음 && -로 갔기 때문에 repositioning해야함
    }

    // 위치를 리셋하는 메서드
    private void Reposition() {
        Vector2 offset = new Vector2(imgWidth * 3f, 0);
        transform.position = (Vector2)transform.position + offset;

    }
}`,
      },
      {
        name: 'PlatformSpawner.cs',
        path: 'Assets/cs/PlatformSpawner.cs',
        lang: 'cs',
        note: '종류별로 미리 만들어 두고, 배치할 때마다 종류를 고르는 오브젝트 풀',
        src: String.raw`private void Start() {
    // 예전에는 시작할 때 발판 3개의 종류를 한 번만 랜덤으로 정해서
    // (예: 코인 3개가 뽑히면) 게임 내내 달팽이가 안 나오는 문제가 있었다.
    // 이제는 종류별로 따로 만들어 두고, 배치할 때마다 종류를 고른다.
    snailPlatforms = new GameObject[count];
    coinPlatforms = new GameObject[count];

    for (int i = 0; i < count; i++) {
        snailPlatforms[i] = Instantiate(platformSnailPrefab, pool, Quaternion.identity);
        coinPlatforms[i] = Instantiate(platformCoinPrefab, pool, Quaternion.identity);
    }
}

private void Update() {
    if (GM.ins.isGameover) {
        return;
    }

    if (Time.time >= lastSpawnTime + timeBetSpawn) {
        lastSpawnTime = Time.time;
        timeBetSpawn = Random.Range(timeBetSpawnMin, timeBetSpawnMax);
        float yPos = Random.Range(yMin, yMax);

        GameObject platform;
        if (NextIsSnail()) {
            platform = snailPlatforms[snailIndex];
            snailIndex = (snailIndex + 1) % count;
        } else {
            platform = coinPlatforms[coinIndex];
            coinIndex = (coinIndex + 1) % count;
        }

        platform.SetActive(false);
        platform.transform.position = new Vector2(xPos, yPos);

        // 꺼져 있는 자식 코인까지 모두 가져와 다시 켬
        Coin[] coins = platform.GetComponentsInChildren<Coin>(true);
        for (int i = 0; i < coins.Length; i++) {
            coins[i].gameObject.SetActive(true);
        }
        platform.SetActive(true);
    }
}`,
      },
      {
        name: 'Player.cs',
        path: 'Assets/cs/Player/Player.cs',
        lang: 'cs',
        note: '다단 점프 · 짧은 점프 · 착지 판정',
        src: String.raw`// 점프 버튼을 눌렀으면 && 최대 점프 회수에 도달하지 않았다면
if (jumpDown && jumpCnt < 5) {
    jumpCnt++;
    rb.linearVelocity = Vector2.zero;          // 점프 직전에 속도를 0으로
    rb.AddForce(new Vector2(0, jumpForce));    // 위로 점프 힘을 가함
    SM.ins.PlayerSound(jumpClip);
    if (PlayerJumpEffectPrefab != null) {
        Destroy(Instantiate(PlayerJumpEffectPrefab, transform.position, Quaternion.identity), 2f);
    }
} else if (jumpUp && rb.linearVelocity.y > 0) {
    // 상승 중에 손을 떼면 점프를 짧게
    rb.linearVelocity = rb.linearVelocity * 0.5f;
}

private void OnCollisionEnter2D(Collision2D collision) {
    // 충돌 표면이 위쪽을 보고 있으면 바닥
    if (collision.contacts[0].normal.y > 0.7f) {
        isGrounded = true;
        jumpCnt = 0;
    }
}`,
      },
    ],
  },

  /* ---------------------------------------------------------- TPS */
  {
    id: 'tps',
    scene: 'Assets/Scenes/Play.unity',
    shots: [
      ['3인칭 추적 카메라', 'tps_followCam.png'],
      ['스코프 줌', 'scopCam.png'],
      ['총 · 사격', 'tps_gun.png'],
      ['애니메이터 · 상체 레이어 (Avatar Mask)', 'player ani, layerMask.png'],
      ['고블린 길찾기 (NavMesh)', 'tps_nav.png'],
      ['체력 슬라이더', 'tps_player_slider.png'],
    ],
    group: 'unity',
    file: 'TangTangGoblin.unity',
    title: 'TPS · TangTang Goblin Playground',
    tagline: '웨이브마다 두 배로 늘어나는 고블린을 총과 수류탄으로 막는 3인칭 슈터',
    tags: ['Unity 6', '3D', 'TPS', 'NavMesh', 'Cinemachine'],
    engine: 'Unity 6000.6.3f1',
    platform: 'PC',
    role: '개인 · 기획 / 프로그래밍',
    period: '2026.08 ~ 2026.10',
    commits: 12,
    repo: GH + 'game-TPS',
    local: 'D:\\mj_Unity\\game-TPS',
    play: 'https://gamejolt.com/games/tps-goblin/1108802',
    youtube: 'https://youtu.be/OdPmh5QEhuM',
    images: ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg'],
    notion: {
      "intent": [
        "PUBG를 모방한 미니 게임 버전으로 구상",
        "조이스틱과 사격 버튼만으로 쉽게 즐기는 웨이브 생존 슈팅을 목표",
        "몰려오는 고블린을 총과 수류탄으로 막아내며 점수를 쌓는 재미를 유도"
      ],
      "work": [
        {
          "t": "적 AI 및 웨이브",
          "tech": [
            "NavMesh",
            "OverlapSphere"
          ],
          "items": [
            "NavMeshAgent로 이동 범위 고정, OverlapSphere(반경에 플레이어가 있는지 검사) + Layer(플레이어)로 플레이어 탐지",
            "웨이브마다 고블린을 생성은 많아지고 생성되는 적 수와 WAVE 팝업 표시"
          ]
        },
        {
          "t": "무기 - 총·수류탄",
          "tech": [
            "Raycast",
            "OverlapSphere",
            "ScriptableObject"
          ],
          "items": [
            "Raycast 사격, 스코프를 켜면 스코프 카메라를 기준으로 조준, LineRenderer로 총알 궤적 표현, 탄창·남은 탄알 수 표시, GunData(ScriptableObject)로 총 데이터 분리",
            "바닥이나 고블린에 닿으면 즉시 폭발하고, OverlapSphere로 범위 안의 고블린을 한 번에 처치"
          ]
        },
        {
          "t": "플레이어 조작",
          "tech": [
            "Joystick",
            "Raycast"
          ],
          "items": [
            "DynamicJoystick으로 이동/회전, 모바일 버튼으로 사격·재장전·수류탄 사용",
            "화면 가운데 조준점을 기준으로 Raycast 사격, 버튼을 통한 스코프 줌 전환"
          ]
        }
      ],
      "retro": [
        "폰트와 intro 배경화면도 너무 아쉽고 PUBG처럼 아바타 화면과 상점에서 옷도 커스텀할 수 있는 기능 추가 필요."
      ]
    },
    plan: {
      goal: 'Intro → Main → Play 씬으로 이어지는 웨이브 서바이벌 TPS',
      points: [
        '웨이브 n의 고블린 수 = 10 × 2ⁿ⁻¹, 최대 10웨이브',
        'NavMesh로 고블린이 플레이어를 추적, 스폰 지점은 NavMesh.SamplePosition으로 바닥에 맞춤',
        '총 · 수류탄 · 스코프, 탄약 / 체력 / 수류탄 아이템',
        '고블린 · 총 스탯은 ScriptableObject(GoblinData, GunData)로 분리',
      ],
      problem: '스포너가 UI와 점수를 직접 건드리면 스크립트끼리 강하게 묶여서 하나를 고치면 다른 곳이 깨졌다.',
      decision: 'GoblinSpawn은 이벤트(onWaveStarted, onEnemyCountChanged, onGoblinKilled)로 알리기만 하고, UI와 GM이 구독하도록 나눴다.',
      result: 'UI를 바꿔도 스폰 로직은 그대로. 플레이어와 고블린은 LivingEntity 하나를 상속해 체력 · 죽음 처리를 공유한다.',
    },
    tree: `Assets/Scripts/
├─ Common/   LivingEntity.cs        # 체력 · 피격 · onDeath 이벤트
├─ Enemy/    Goblin.cs · GoblinSpawn.cs
├─ Player/   PlayerInput · PlayerMovement · PlayerShooter · PlayerHealth · PlayerGrenade · CamLook · Scope
├─ Weapon/   Gun.cs · Grenade.cs
├─ Item/     ItemSpawn · AmmoPack · HealthPack · GrenadePack · Coin
├─ Manager/  GM.cs · SM.cs · UIM.cs · SceneChange.cs
├─ Data/     GoblinData · GunData · SettingsData   (ScriptableObject)
├─ Interface/ IDamageable · IItem · IBlink · IPop
└─ UI/       ItemCntUI · SettingsMenu
Scenes/  Intro.unity → Main.unity → Play.unity`,
    setup: [
      ['Unity', '6000.6.3f1 (Unity 6) · URP 17.6'],
      ['카메라', 'Cinemachine 6.6 — 3인칭 추적 + 스코프 줌'],
      ['AI', 'AI Navigation 2.0.14 — NavMeshSurface Bake 후 고블린 추적'],
      ['데이터', 'Create › ScriptableObject › GoblinData / GunData'],
    ],
    steps: [
      'Play 씬 바닥에 NavMeshSurface 추가 → Bake',
      'GoblinSpawn: goblinPrefab · goblinDatas[] · spawnPoints[] 연결',
      'File › Build Profiles 에 Intro · Main · Play 순서로 등록',
    ],
    code: [
      {
        name: 'GoblinSpawn.cs',
        path: 'Assets/Scripts/Enemy/GoblinSpawn.cs',
        lang: 'cs',
        note: '웨이브 생성 + 이벤트로만 알리기',
        src: String.raw`// 웨이브마다 고블린을 생성한다. UI·점수는 모르고, 이벤트로 알리기만 한다
public static event Action<int> onWaveStarted;            // 새 웨이브 시작
public static event Action<int, int> onEnemyCountChanged; // 웨이브 번호, 남은 적 수
public static event Action onGoblinKilled;

private void SpawnWave() {
    wave++;
    onWaveStarted?.Invoke(wave);

    int spawnCnt = cntPerWave * (int)Mathf.Pow(2, wave - 1); // wave마다 고블린이 배로 늘어남
    for (int i = 0; i < spawnCnt; i++) {
        CreateGoblin();
    }
    onEnemyCountChanged?.Invoke(wave, goblins.Count);
}

private void CreateGoblin() {
    GoblinData goblinData = goblinDatas[UnityEngine.Random.Range(0, goblinDatas.Length)];
    Transform spawnPoint = spawnPoints[UnityEngine.Random.Range(0, spawnPoints.Length)];
    Goblin goblin = Instantiate(goblinPrefab, spawnPoint.position, spawnPoint.rotation);

    if (spawnEffect != null) {
        Vector3 groundPos = spawnPoint.position;
        NavMeshHit hit;
        if (NavMesh.SamplePosition(spawnPoint.position, out hit, 10f, NavMesh.AllAreas)) {
            groundPos = hit.position;
        }
        Destroy(Instantiate(spawnEffect, groundPos + Vector3.up * 0.05f, Quaternion.identity), 3f);
    }

    goblin.Setup(goblinData);
    goblins.Add(goblin);
    goblin.onDeath += () => OnGoblinDeath(goblin);
}`,
      },
      {
        name: 'LivingEntity.cs',
        path: 'Assets/Scripts/Common/LivingEntity.cs',
        lang: 'cs',
        note: '플레이어와 고블린이 함께 상속하는 체력 시스템',
        src: String.raw`public class LivingEntity : MonoBehaviour, IDamageable {
    public float startingHealth = 100f;
    public float health { get; protected set; }
    public bool dead { get; protected set; }
    public event Action onDeath;

    protected virtual void OnEnable() {
        dead = false;
        health = startingHealth;
    }

    public virtual void OnDamage(float damage, Vector3 hitPoint, Vector3 hitNormal) {
        health -= damage;
        if (health <= 0 && !dead) {
            Die();
        }
    }

    public virtual void RestoreHealth(float newHealth) {
        if (dead) {
            return;
        }
        health += newHealth;
    }

    public virtual void Die() {
        if (onDeath != null) {
            onDeath();
        }
        dead = true;
    }
}`,
      },
    ],
  },

  /* ---------------------------------------------------------- BeatSync */
  {
    id: 'beatsync',
    dir: '0beatsync',
    scene: 'Assets/Scenes/vrTEST.unity',
    shots: [
      ['광선검 (왼쪽)', 'vr_bs_사바(왼쪽).png'],
      ['노트 생성', 'vr_bs_스폰 노트.png'],
      ['노래 선택', 'vr_bs_노래선택.png'],
      ['난이도 선택', 'vr_bs_난이도.png'],
      ['360° 배경 영상', 'vr_bs_비디오 설정.png'],
      ['타격 이펙트', 'vr_bs_manager_effect.png'],
      ['사운드', 'vr_bs_manager_sound.png'],
    ],
    group: 'unity',
    file: 'RainbowBeatSaber.unity',
    title: 'Rainbow Beat Saber',
    tagline: '음악 박자에 맞춰 날아오는 노트를 광선검으로 베는 VR 리듬 게임',
    tags: ['Unity 6', 'VR', 'C#', 'XR Toolkit', 'OpenXR'],
    engine: 'Unity 6000.6.3f1',
    platform: 'Meta Quest (OpenXR)',
    role: '개인 · 기획 / 프로그래밍',
    period: '2026.05 ~ 2026.07',
    commits: 16,
    repo: GH + 'game-VR-BeatSync',
    local: 'D:\\mj_Unity\\game-VR-BeatSync',
    play: 'https://gamejolt.com/games/VRBeatSync/1112300',
    youtube: 'https://youtu.be/Ttm4jNRbhC4',
    images: ['00.jpg', '01.jpg', '02.jpg'],
    notion: {
      "intent": [
        "VR의 몰입감을 활용하여 음악과 함께 몸을 움직이는 리듬 액션 게임",
        "직관적인 컨트롤과 화려한 이펙트를 통해 실제 공연을 즐기는 듯한 경험을 제공",
        "비트에 맞게 노트 생성 구현"
      ],
      "work": [
        {
          "t": "노트 생성 및 판정",
          "tech": [
            "Prefab",
            "Collider"
          ],
          "items": [
            "음악 박자에 맞춰 노트 생성",
            "Saber와 충돌 시 판정 처리",
            "방향에 맞는 타격 구현"
          ]
        },
        {
          "t": "이펙트 및 사운드",
          "tech": [
            "Particle System",
            "AudioSource"
          ],
          "items": [
            "Saber의 트레일 효과 추가",
            "노트 절단 시 파티클 효과 출력 → 타격 효과음",
            "Rainbow 테마에 맞는 시각 네온(Bloom) 효과 적용"
          ]
        },
        {
          "t": "점수 및 게임 진행",
          "tech": [
            "Score System"
          ],
          "items": [
            "노트 판정에 따른 점수 증가",
            "콤보 시스템 구현",
            "플레이 종료 후 결과 화면 출력"
          ]
        }
      ],
      "retro": [
        "노트를 맞혔을때 모션리액션 중 진동(햅틱)같은 느낌이 더해졌다면 더 생동감을 추가할 필요가 있음."
      ]
    },
    plan: {
      goal: '비트맵(채보) 파일을 읽어 박자에 맞게 노트를 보내고, 방향 · 위치로 판정하는 VR 리듬 게임',
      points: [
        '칼을 휘두른 방향과 노트 방향이 130° 이상 벌어져야 올바른 베기',
        '칼 손잡이에서 맞은 거리로 판정 등급(HitGrade)',
        'Hit +5 · 연속 Hit +7 · Miss 감점 (0점 아래로 안 내려감)',
        '노래 끝 · 점수 0점 · 연속 Miss 3번 중 먼저 오는 것으로 GAME OVER',
      ],
      problem: '프레임이 늦게 오면 노트가 박자보다 늦게 생성돼서, 손에 닿는 시점이 음악과 어긋났다.',
      decision: 'NoteScheduler가 "노래 시간 − 이동 시간"에 생성하고, 늦은 만큼(advance) 앞쪽에서 생성해 도착 시각을 맞췄다.',
      result: '프레임이 흔들려도 노트가 정확한 박자에 판정선에 도착한다.',
    },
    rules: [
      ['첫 Hit (COMBO 1)', 'COMBO 1', '+5', '그대로'],
      ['연속 Hit (COMBO 2+)', '+1', '+7', '그대로'],
      ['Miss', '0으로 초기화', '감점 (최소 0)', '+1'],
    ],
    tree: `Assets/cs/
├─ Note/       Note · NoteData · NoteScheduler · NoteSpawner · CutDirection · HitGrade
├─ Player/     Saber.cs              # 레이 + 스윙 속도 + 방향 판정
├─ Score/      ScoreSystem.cs        # GameRule.md 규칙 그대로
├─ Song/       BeatmapParser.cs      # 채보 읽기
├─ Difficulty/ DifficultyData · DifficultySelector · LaneMapper
├─ Manager/    GM · GameState · EffectManager · SoundManager
├─ Interfaces/ IScore · ISpawner · IJudgeable · ICuttable · IMusic …
└─ UI/
GameRule.md                          # 판정 / 점수 규칙 문서`,
    setup: [
      ['Unity', '6000.6.3f1 (Unity 6) · URP 17.6'],
      ['XR', 'XR Interaction Toolkit 3.6 · OpenXR 1.18 · Input System 1.20'],
      ['판정', 'Saber 의 LayerMask = Note 레이어만'],
      ['조절', 'GM 오브젝트 › ScoreSystem 인스펙터에서 점수 숫자 변경'],
    ],
    steps: [
      'Project Settings › XR Plug-in Management › OpenXR 체크 (Meta Quest Support)',
      '양손 컨트롤러에 Saber.cs, layer = Note',
      '채보 파일을 BeatmapParser에 연결 → NoteScheduler가 Tick(songTime)으로 생성',
    ],
    code: [
      {
        name: 'NoteScheduler.cs',
        path: 'Assets/cs/Note/NoteScheduler.cs',
        lang: 'cs',
        note: '늦은 프레임만큼 앞에서 생성해 박자를 맞춤',
        src: String.raw`public NoteScheduler(ISpawner spawner, IReadOnlyList<NoteData> notes,
                     float travelDistance, float missMargin, Action<NoteResult> onJudged) {
    _spawner = spawner;
    _notes = notes;
    _onJudged = onJudged;
    _travelTime = travelDistance / spawner.Speed;
    _missDistance = travelDistance + missMargin;
}

public void Tick(float songTime) {
    while (!IsDone) {
        NoteData note = _notes[_nextIndex];
        float spawnTime = SpawnTime(note);
        if (songTime < spawnTime) {
            break;
        }
        float advance = (songTime - spawnTime) * _spawner.Speed;   // 프레임 때문에 늦은 만큼 앞에서 생성
        IJudgeable spawned = _spawner.Spawn(note, _missDistance, advance);
        spawned.Judged += _onJudged;
        _nextIndex++;
    }
}

private float SpawnTime(NoteData note) {
    return note.Time - _travelTime;
}`,
      },
      {
        name: 'Saber.cs',
        path: 'Assets/cs/Player/Saber.cs',
        lang: 'cs',
        note: '칼 전체 길이로 레이 → 스윙 속도 · 방향 · 위치 판정',
        src: String.raw`void Update() {
    RaycastHit hit;
    // 칼 손잡이(0m)부터 칼 끝까지 전체 길이로 레이를 쏨
    Vector3 handPos = transform.position - transform.forward * (_hitZone.BladeLength * 0.5f);

    if (Physics.Raycast(handPos, transform.forward, out hit, _hitZone.BladeLength, layer)) {
        Vector3 v = transform.position - prevPos;

        // 칼을 대고만 있을 때(거의 안 움직임)는 판정하지 않음
        if (v.magnitude / Mathf.Max(Time.deltaTime, 0.0001f) >= _minSwingSpeed) {
            // 칼의 이동 방향과 노트 위쪽 방향 사이 각도가 130도보다 크면 올바른 방향
            bool rightDirection = Vector3.Angle(v, hit.transform.up) > 130;
            HitGrade grade = rightDirection ? _hitZone.GradeAt(hit.distance) : HitGrade.Miss;

            ICuttable cuttable = hit.transform.GetComponentInParent<ICuttable>();
            if (cuttable != null) {
                cuttable.Cut(grade);
            } else if (grade != HitGrade.Miss) {
                Destroy(hit.transform.gameObject);
            }
        }
    }
    prevPos = transform.position;
}`,
      },
      {
        name: 'ScoreSystem.cs',
        path: 'Assets/cs/Score/ScoreSystem.cs',
        lang: 'cs',
        note: 'GameRule.md 의 점수 · GAME OVER 규칙',
        src: String.raw`public void Register(NoteResult result) {
    if (_isGameOver) {
        return;
    }

    if (result == NoteResult.Hit) {
        Combo++;
        _consecutiveMiss = 0;
        // 첫 Hit(콤보 1) +5, 연속 Hit(콤보 2 이상) +7
        Score += Combo >= 2 ? _comboHitPoints : _firstHitPoints;
    } else {
        Combo = 0;
        Miss++;
        _consecutiveMiss++;
        Score = Mathf.Max(0, Score - _missPenalty);   // 0점 아래로는 내려가지 않음
    }

    BestScore = Mathf.Max(BestScore, Score);
    while (Score >= _nextLevelUpScore) {
        Level++;
        _nextLevelUpScore *= Mathf.Max(2, _levelUpMultiplier);
        LeveledUp?.Invoke(Level);
    }
    Changed?.Invoke();

    // Miss 로 점수가 0점이 되거나, Miss 가 연속 3번이면 GAME OVER
    if (result == NoteResult.Miss && (Score <= _gameOverScore || _consecutiveMiss >= _gameOverConsecutiveMiss)) {
        _isGameOver = true;
        GameOver?.Invoke();
    }
}`,
      },
    ],
  },

  /* ---------------------------------------------------------- Bowling */
  {
    id: 'bowling',
    scene: 'Assets/씬/BowlingGame.unity',
    shots: [
      ['핀 자리 배치', 'bowling_pinPivot.png'],
      ['핀 생성', 'bowling_pin.png'],
      ['공 거치대 (소켓)', 'bowling_bollSoket.png'],
      ['레벨 · 기회 · 제한 시간', 'bowling_manager_button.png'],
      ['박자에 맞춰 반짝이는 조명', 'bowling_manager_rythemSaga.png'],
      ['사운드', 'bowling_manager_sound.png'],
      ['클리어 UI · 이펙트', 'bowling_canvas_effect.png'],
    ],
    group: 'unity',
    file: 'BowllyBoll.unity',
    title: 'VR Bowling · BowllyBoll',
    tagline: '공을 직접 잡아 던지고, 음악에 맞춰 레인 조명이 반짝이는 VR 볼링',
    tags: ['Unity 6', 'VR', 'C#', 'Generic', 'Interface'],
    engine: 'Unity 6000.3.26f1',
    platform: 'Meta Quest (OpenXR)',
    role: '개인 · 기획 / 프로그래밍',
    period: '2026.10',
    commits: 5,
    repo: GH + 'game-VR-Bowling',
    local: 'D:\\mj_Unity\\game-VR-Bowling',
    play: 'https://gamejolt.com/games/vr-bowling/1108572',
    youtube: 'https://youtu.be/MezmB4jBkwc',
    images: ['00.jpg', '01.jpg', '02.jpg'],
    notion: {
      "intent": [
        "실제 볼링장에 온 것처럼 공을 손으로 잡고 던지는 VR 볼링 게임을 기획",
        "레벨마다 목표 점수를 넘기는 미션과 음악에 맞춰 반짝이는 조명으로 몰입감과 도전 욕구를 유도"
      ],
      "work": [
        {
          "t": "레벨 및 랭킹",
          "tech": [
            "LevelManager",
            "PlayerPrefs"
          ],
          "items": [
            "목표 점수는 레벨 × 500, 10단계까지 진행, 30초 제한 시간",
            "클리어하면 핀·공·점수판을 숨기고 NEXT / RESTART / QUIT 판넬 표시",
            "핀이 멈춘 뒤 판정하여 NICE JOB / ONE MORE / MISS / FAIL 출력"
          ]
        },
        {
          "t": "연출 및 구조",
          "tech": [
            "Beat Sage",
            "Object Pool",
            "Floating Text"
          ],
          "items": [
            "Beat Sage 맵의 노트 시간에 맞춰 천장 조명이 깜빡임, 곡 선택 재생",
            "핀 위로 +10에서 +100까지 올라가며 떠오르는 점수 효과",
            "Spawner<T> 제네릭 상속과 오브젝트 풀로 공 재사용",
            "머리를 부드럽게 따라오는 World Space 캔버스 UI"
          ]
        },
        {
          "t": "투구 및 핀 판정",
          "tech": [
            "XR Grab Interactable",
            "Rigidbody"
          ],
          "items": [
            "XR Grab으로 공을 잡아 던지는 물리 기반 투구",
            "핀이 바닥(Floor)에 닿거나 45° 이상 기울면 쓰러진 것으로 판정, 핀 1개당 100점"
          ]
        }
      ],
      "retro": [
        "노래 박자에 맞춰 조명이 깜빡임을 비트에 맞게 연출하니 볼링장 분위기가 살아났다.",
        "다만 실제 볼링처럼 스트라이크·스페어와 10프레임 점수 규칙을 넣지 못했고, 공의 커브나 진동(햅틱) 같은 손맛 요소가 부족."
      ]
    },
    plan: {
      goal: '손으로 공을 잡아 던지는 감각에 집중한 VR 볼링 + 레벨 · 랭킹',
      points: [
        'BallSpawner가 소켓 4칸을 공으로 채우고, 던진 공은 풀로 돌아옴',
        '핀 머리가 바닥에 닿거나 45° 이상 기울면 쓰러짐 → +100점',
        '한 번 던진 결과를 LevelManager가 판정한 뒤 3초 후 핀 리셋',
        'BeatSageLights: 노래 박자에 맞춰 레인 조명이 바뀜, FloatingText 점수 팝업',
      ],
      problem: '공 스포너와 핀 스포너가 "프리팹 배열에서 하나 골라 만들기"를 각자 똑같이 짜고 있었다.',
      decision: '제네릭 추상 클래스 Spawner<T>에 공통 기능을 모으고, "어떻게 깔지"만 abstract Spawn()으로 자식이 구현하게 했다.',
      result: 'BallSpawner · PinSpawner는 배치 규칙만 남아 짧아지고, ISpawner / IReset 으로 LevelManager가 둘을 같은 방식으로 다룬다.',
    },
    tree: `Assets/cs/
├─ Spawner.cs        # abstract Spawner<T> : MonoBehaviour, ISpawner
├─ BallSpawner.cs    # 소켓 4칸 채우기 + 공 풀
├─ PinSpawner.cs     # 삼각형 핀 배치
├─ ISpawner.cs · IReset.cs · ITextPopEffect.cs
├─ Ball.cs · Pin.cs
├─ LevelManager.cs   # 투구 판정 · 레벨 클리어 · 리셋
├─ GameManager.cs · SoundManager.cs · ButtonManager.cs
├─ BeatSageLights.cs · rhthem.cs        # 박자 조명
├─ Ranking.cs · RankingBoard.cs
└─ UI: LevelClearUI · PauseMenuUI · SongListUI · Effect*`,
    setup: [
      ['Unity', '6000.3.26f1 (Unity 6) · URP 17.6 (Bloom 형광 효과)'],
      ['XR', 'XR Interaction Toolkit 3.6 · OpenXR 1.18'],
      ['잡기', 'XR Grab Interactable + XR Socket Interactor 4칸'],
      ['UI', 'FloatingTextEngineLite 로 점수 숫자 띄우기'],
    ],
    steps: [
      'Ball 프리팹: Rigidbody + XR Grab Interactable (Throw On Detach)',
      '레인 바닥 태그 Floor, 핀은 Pin.cs + Collider(Trigger 머리)',
      'Volume › Bloom 켜고 Emission 머티리얼로 형광 레인',
    ],
    code: [
      {
        name: 'Spawner.cs',
        path: 'Assets/cs/Spawner.cs',
        lang: 'cs',
        note: '공 · 핀 스포너가 함께 쓰는 제네릭 부모',
        src: String.raw`public abstract class Spawner<T> : MonoBehaviour, ISpawner where T : Component {
    [Header("프리팹")]
    [Tooltip("랜덤으로 뽑을 프리팹들")]
    [SerializeField] protected T[] prefabs;

    // 시작하면 기본으로 전부 깐다 (자식이 Start 를 따로 쓰지 않아도 됨)
    protected virtual void Start() {
        Spawn();
    }

    // "어떻게 깔지"는 자식마다 다르니까 abstract (자식이 꼭 구현)
    public abstract void Spawn();

    protected bool HasPrefabs() {
        if (prefabs != null && prefabs.Length > 0) return true;
        Debug.LogWarning($"[{GetType().Name}] prefabs 가 비어 있습니다.");
        return false;
    }

    protected T PickRandomPrefab() {
        return prefabs[Random.Range(0, prefabs.Length)];
    }

    // virtual: 기본 동작은 여기 있지만, 자식이 필요하면 바꿔 쓸 수 있다
    protected virtual T Create(T prefab, Vector3 position, Quaternion rotation, Transform parent) {
        return Instantiate(prefab, position, rotation, parent);
    }
}`,
      },
      {
        name: 'Pin.cs',
        path: 'Assets/cs/Pin.cs',
        lang: 'cs',
        note: '머리가 바닥에 닿거나 많이 기울면 쓰러짐',
        src: String.raw`private void OnTriggerEnter(Collider other) {
    if (isFallen) return;
    if (other.gameObject.CompareTag("Floor")) {
        MarkFallen();
    }
}

// 쓰러짐 처리 (점수 +, 소리) — 머리가 바닥에 닿았을 때 / 많이 기울었을 때 둘 다 여기로
private void MarkFallen() {
    if (isFallen) return;
    isFallen = true;
    if (GameManager.Instance != null) {
        SoundManager.instance.PlaySFX(SoundManager.instance.hitClip);
        GameManager.Instance.OnPinFallen(TopPosition()); // 점수, 숫자는 GameManager 가
    }
}

private void LateUpdate() {
    if (isFallen || isFrozen) return;   // 고정된(아직 공이 안 온) 핀은 검사 안 함
    Vector3 up = transform.TransformDirection(localUp);
    if (Vector3.Angle(up, Vector3.up) >= fallenAngle) MarkFallen();
}`,
      },
    ],
  },

  /* ---------------------------------------------------------- Room103 */
  {
    id: 'room103',
    group: 'unity',
    file: 'Room103.unity',
    title: 'VR Room103',
    tagline: '키패드 비밀번호를 풀어 문을 여는 VR 방탈출 프로토타입',
    tags: ['Unity 6', 'VR', 'XR Hands', 'C#'],
    engine: 'Unity 6000.3.10f1',
    platform: 'Meta Quest (OpenXR)',
    role: '개인 · 프로토타입',
    period: '2026.10 ~ 2026.11',
    commits: 2,
    repo: GH + 'game-VR-Room103',
    local: 'D:\\mj_Unity\\VRRoom103',
    play: '',
    youtube: '',
    images: [],
    plan: {
      goal: '손으로 키패드를 눌러 비밀번호를 맞히면 문이 열리는 방탈출의 첫 방',
      points: [
        'XR Poke 로 키패드 버튼 누르기 (손 추적 XR Hands 지원)',
        '자릿수만큼만 입력, 확인 버튼으로 검사',
        '맞으면 Animator로 문 열기 → 3초 뒤 자동으로 닫힘',
      ],
      problem: '버튼마다 문 · 화면 로직을 넣으면 같은 코드가 10번 반복된다.',
      decision: '버튼은 AddDigit(숫자)만 부르고, 입력 · 검사 · 문 열기는 KeypadManager 하나가 맡도록 했다.',
      result: '비밀번호와 열린 시간을 인스펙터에서 바꾸기만 하면 다른 방에도 그대로 쓸 수 있다.',
    },
    tree: `Assets/
├─ Scripts/
│  ├─ KeypadManager.cs    # 입력 · 검사 · 문 열기/닫기
│  └─ KeypadButton.cs     # Poke → AddDigit(digit)
├─ Keypad/                # 키패드 모델 · SlidingDoor
└─ Scenes/ BasicScene.unity · SampleScene.unity`,
    setup: [
      ['Unity', '6000.3.10f1 (Unity 6) · URP 17.3'],
      ['XR', 'XR Interaction Toolkit 3.3.1 · OpenXR 1.16.1 · XR Hands'],
      ['문', 'Animator Bool 파라미터 IsOpen'],
    ],
    steps: [
      'KeypadManager: passwordScreen(TMP) · doorAnimator 연결, correctCode 입력',
      '각 버튼 XR Poke Filter → Select Entered 에 AddDigit("1") …',
    ],
    code: [
      {
        name: 'KeypadManager.cs',
        path: 'Assets/Scripts/KeypadManager.cs',
        lang: 'cs',
        note: '입력 · 검사 · 문 열기를 한 곳에서',
        src: String.raw`public void AddDigit(string digit) {
    if (currentInput.Length < correctCode.Length) {
        currentInput += digit;
        RefreshScreen();
    }
}

public void VerifyCode() {
    if (currentInput == correctCode) {
        Debug.Log("Access Granted!");
        OpenDoor();
        ClearInput();
    } else {
        Debug.Log("Access Denied!");
        ClearInput();
    }
}

public void OpenDoor() {
    if (!IsOpen) {
        doorAnimator.SetBool("IsOpen", true);
        IsOpen = true;
        Invoke("CloseDoor", doorStayOpenTime);
    }
}

public void CloseDoor() {
    if (IsOpen) {
        doorAnimator.SetBool("IsOpen", false);
        IsOpen = false;
    }
}`,
      },
    ],
  },

  /* ---------------------------------------------------------- c-master */
  {
    id: 'cmaster',
    dir: 'webapp_cmaster',
    flow: {
      svg: 'flow.svg',
      steps: [
        'Cloudflare가 화면 파일과 문제(기대 출력 포함)를 바로 보낸다. 기대 출력은 모범답안을 gcc로 실행해 미리 만든 값',
        '[제출]을 누르면 JudgeService가 숨은 테스트를 하나씩 Web Worker에 보낸다',
        'Worker 안의 직접 만든 C 인터프리터가 코드를 실행하고 출력을 돌려준다 (6초 안에 대답이 없으면 끊고 TLE)',
        '출력과 기대 출력을 비교해 AC · WA · CE · RE · TLE 로 판정한다',
        '맞으면 진도를 /api/progress 로 보내고, Worker가 경험치를 기록으로 다시 계산해 D1에 저장한다',
      ],
    },
    group: 'web',
    file: 'c-master.js',
    title: 'c-master',
    tagline: '설치 없이 브라우저에서 C를 풀고 채점받는 학습 웹앱 — 캐릭터 코디가 함께 자람',
    tags: ['Cloudflare Workers', 'D1', 'Vanilla JS', 'Web Worker', 'PWA'],
    engine: 'Cloudflare Workers + D1',
    platform: 'Web · PWA (설치형)',
    role: '개인 · 기획 / 콘텐츠 / 풀스택',
    period: '2026.11',
    commits: 73,
    repo: GH + 'app-c-master',
    local: 'D:\\mj_Server\\app-c-master',
    play: 'https://app-c-master.itsjinmi.workers.dev',
    playLabel: '사이트 열기',
    youtube: '',
    images: ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'],
    icon: 'icon.png',
    plan: {
      goal: 'C언어를 처음 배우는 학생이 문제 · 퀴즈로 경험치를 쌓아 "C 마스터"까지 자라는 게임형 학습',
      points: [
        '18단원 · 5스테이지, 문제 72개 · 퀴즈 90문항 (정올 · 백준 형식)',
        '브라우저용 C11 인터프리터를 Web Worker에서 실행 — 화면이 멈추지 않음',
        '알고리즘 32문제(C · Python/Pyodide), 객체지향 레슨 13개(C#)',
        '커뮤니티: 문제 내기 · 댓글 · 좋아요 · 채택 · 신고 3번이면 자동 숨김',
      ],
      problem: '학생이 무한 루프를 제출하면 탭 전체가 멈추고, Worker를 못 쓰는 환경도 있었다.',
      decision: '실행 제한 3초 + Worker 응답 제한 6초를 두고, Worker가 실패하면 같은 모양(runAsync)의 DirectJudgeRunner로 넘긴다.',
      result: '어떤 코드를 내도 화면은 살아 있고, 테스트에서는 Direct 실행기로 같은 결과를 검증한다.',
    },
    tree: `public/js/
├─ datasources/   http-client · api-datasources     # 서버와 주고받기
├─ repositories/  api-repositories                  # 데이터 모으기
├─ services/      auth · judge · learning · progress · visit
├─ domain/        curriculum · progress-rules · brace-style · community-rules …
├─ judge/         c-interpreter · judge-runners · judge-worker · python-worker
├─ i18n/          ko · en · zh
└─ ui/            map · quiz · problem · community · ranking views
server/  Worker API  ·  migrations/  D1 스키마  ·  content/  문제 원본`,
    setup: [
      ['런타임', 'Cloudflare Workers (wrangler.jsonc) + D1 SQLite'],
      ['구조', 'DataSource → Repository → Service → View (요청 · 응답만, 소켓 없음)'],
      ['채점', 'C11 인터프리터(Web Worker) · Pyodide(Python)'],
      ['설치', 'manifest.webmanifest — 크롬 메뉴에서 앱으로 설치'],
      ['반응형', '900 · 640 · 560 · 520px 미디어 쿼리'],
    ],
    steps: [
      'npm install',
      'npx wrangler d1 migrations apply --local',
      'npm run dev   # http://localhost:8787',
      'npx wrangler deploy',
    ],
    code: [
      {
        name: 'judge-runners.js',
        path: 'public/js/judge/judge-runners.js',
        lang: 'js',
        note: '화면이 멈추지 않는 채점기 + 실패 시 대체 실행기',
        src: String.raw`const RUN_TIME_LIMIT_MS = 3000;      // 제출한 프로그램 1회 실행 제한
const WORKER_HARD_LIMIT_MS = 6000;   // 이 시간 안에 대답이 없으면 Worker를 끊는다

export class DirectJudgeRunner {
    async runAsync(src, input, files) {
        try {
            return execute(src, { input: input ?? '', files: files ?? {}, timeLimit: RUN_TIME_LIMIT_MS });
        } catch (e) {
            return { ok: false, kind: 'internal', message: '실행기를 시작하지 못했어요: ' + (e && e.message), output: '' };
        }
    }
}

export class WorkerJudgeRunner {
    #workerUrl;
    #fallback;
    #worker = null;
    #waiting = new Map();
    #workerWorks = null; // null: 아직 모름, true/false

    constructor(workerUrl, fallback = new DirectJudgeRunner()) {
        this.#workerUrl = workerUrl;
        this.#fallback = fallback;
    }

    #start() {
        try {
            this.#worker = new Worker(this.#workerUrl, { type: 'module' });
            this.#worker.onmessage = (e) => {
                this.#workerWorks = true;
                const job = this.#waiting.get(e.data.id);
                if (job) {
                    clearTimeout(job.timer);
                    this.#waiting.delete(e.data.id);
                    job.resolve(e.data.result);
                }
            };
            this.#worker.onerror = () => {
                if (this.#workerWorks !== true) {
                    this.#giveUp();
                }
            };
        } catch (e) {
            this.#workerWorks = false;
            this.#worker = null;
        }
    }
}`,
      },
    ],
  },

  /* ---------------------------------------------------------- URURU */
  {
    id: 'ururu',
    dir: 'webapp_ururu',
    flow: {
      svg: 'flow.svg',
      steps: [
        'Cloudflare Pages는 화면 파일만 전달하고, 로그인은 Firebase Auth(구글)로 한다',
        'A가 보내면 chats/{A_B}/messages 에 문서 하나를 쓴다 (members 에 두 사람 uid)',
        'Firestore 보안 규칙이 친구인지 · 차단 · 글자 수 · 이용 정지를 검사한 뒤 저장한다',
        'B는 members 에 자기가 들어 있는 메시지를 onSnapshot 으로 구독 중이라 바로 받는다',
        'ChatStore 가 그 친구 주제만 알려서 그 대화 줄만 다시 그린다',
        '서버 함수는 욕설 재검사 · 제재와 친구 정보 복사를 맡는다 (유료 요금제에서 켬)',
      ],
    },
    group: 'web',
    file: 'URURU.jsx',
    title: 'URURU · 우르르',
    tagline: '스와이프로 친구를 만나고 바로 채팅하는 소셜 앱',
    tags: ['React 19', 'Vite', 'Firebase', 'Cloudflare Pages', 'MVC'],
    engine: 'React 19 + Vite + Firebase',
    platform: 'Web · Android',
    role: '개인 · 기획 / 디자인 / 프론트엔드',
    period: '2026.10 ~ 2026.11',
    commits: 18,
    repo: GH + 'app-URURU',
    local: 'D:\\mj_Server\\app-URURU',
    play: 'https://app-ururu.pages.dev',
    playLabel: '앱 열기',
    youtube: '',
    images: ['00.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
    icon: 'icon.png',
    plan: {
      goal: 'Chat · Swipe · Friends · Me 네 탭으로 친구 찾기부터 대화까지 한 앱에서',
      points: [
        '아이콘만 있는 하단 탭, 밝게 / 어둡게 테마 버튼 (기기에 기억)',
        'PC에서는 넓은 화면 전용 배치(:has() 레이아웃), 폰에서는 기존 디자인 그대로',
        '앱 시작: 이름만 보이는 스플래시 → 바로 로그인 / 회원가입',
        '"나" 탭의 출처 표시 시트 (폰트 · 이미지 크레딧)',
      ],
    },
    tree: `src/
├─ core/       config · credits
├─ data/       *Store.js · *Repository.js     # Model
├─ actions/    MeActions · ChatActions …      # Controller
├─ ui/         common · overlays · screens    # View (JSX)
├─ platform/   features.js                    # 기능 켜기/끄기
└─ i18n/       ko · en
styles/  base.css · chat.css · start.css
tests/   data.test.js`,
    setup: [
      ['프론트', 'React 19 · Vite'],
      ['백엔드', 'Firebase Auth · Firestore · Storage (firestore.rules)'],
      ['배포', 'Cloudflare Pages'],
      ['규칙', 'Airbnb + Prettier, 기능 토글 src/platform/features.js'],
    ],
    steps: ['npm install', 'npm run dev', 'npm test', 'npm run build'],
    code: [],
  },
];

const TEAM = [
  {
    id: 'team',
    title: '미래내일 일경험 · 등산 가이드',
    tagline: '응급 상황에 바로 대처할 수 있는 오프라인 AR 등산 가이드 앱',
    tags: ['MakeView', 'AR', 'Figma', '팀 프로젝트', '공모전 동상'],
    period: '2026.05 ~ 2026.07',
    role: '팀원 · UI/UX 설계(Figma) · 영상 촬영 기획 · 편집',
    award: '공모전 동상',
    icon: 'icon.jpg',
    youtube: 'https://youtu.be/YG2gX-nRBZQ',
    images: ['00.jpg', '01.jpg'],
    intent: ['등산객 급증에 따른 안전한 산행을 예방하기 위해 유저들의 사용성을 높이는 UI 구성 및 직관적인 프로세스로 즐거운 산행을 할 수 있도록 구성'],
    work: [
      { t: '응급 상황에 대한 즉각적 대처', items: ['AR 플랫폼의 특성을 살려 3D 프리팹을 현실 공간에 증강시켰으며, 사용자가 응급처치가 필요한 부위를 직접 선택해 가이드 영상을 시청할 수 있도록 구현', '인터랙티브한 터치 버튼 애니메이션을 적용해 직관적이고 친절한 사용자 경험(UX)을 유도'] },
      { t: '오프라인 환경에서도 무리없는 작동', items: ['통신이 불안정한 산악 환경에서도 원활히 작동할 수 있도록 오프라인 기반 시스템으로 보완', '외부 검색이나 네트워크 의존도를 최소화하고, 앱 내에 통합된 독립적인 워크플로우만으로 문제를 해결하도록 설계'] },
      { t: '팀원으로서의 역할 및 기여', items: ['Figma를 활용한 UI/UX 설계부터 영상 촬영 기획, 편집 구성까지 기획과 제작 전 과정에 주도적으로 참여'] },
    ],
    retro: ['코드를 사용할 수 없어서 풍부하게 적용이 어려웠지만 앱에 적용될 UI를 포토샵 편집하고 결과물을 영상 편집하여 만족스러운 결과물을 도출할 수 있었다.'],
  },
];

window.PORTFOLIO = { PROFILE, PROJECTS, TEAM };

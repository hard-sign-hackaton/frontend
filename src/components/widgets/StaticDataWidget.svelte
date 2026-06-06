<script lang="ts">
    const data = {
        rules: [
            {
                title: "Нельзя курить на придомовой территории",
                text: "Запрещено курить (парить) на расстоянии до 10 метров от жилого здания",
            },
        ],
        garbageSchedule: ["Суббота, 6 июня", "Среда, 10 июня"],
        contacts: [
            {
                name: "Домоуправление",
                phone: "8 800 555 35 35",
            },
        ],
    };
</script>

<section class="flex flex-row items-stretch h-full gap-2">
    <div class="flex-2/3 p-2">
        <h2 class="font-bold text-xl">Правила ЖК</h2>
        <ol class="list-decimal list-inside">
            {#each data.rules as rule, i}
                <li>
                    <h3 class="font-bold text-l inline">{rule.title}</h3>
                    <p>{rule.text}</p>
                </li>
            {/each}
        </ol>
    </div>
    <div class="flex-1/3 flex flex-col border-l-black border-l p-2">
        <div class="flex-1/2">
            <h2 class="font-bold text-xl">График вывоза мусора</h2>
            <ol class="list-decimal list-inside">
                {#each data.garbageSchedule as date}
                    <li>
                        {date}
                    </li>
                {/each}
            </ol>
        </div>
        <div class="flex-1/2">
            <h2 class="font-bold text-xl">Полезные контакты</h2>
            <ol>
                {#each data.contacts as contact}
                    <li>
                        {contact.name}: {contact.phone}
                    </li>
                {/each}
            </ol>
        </div>
    </div>
</section>

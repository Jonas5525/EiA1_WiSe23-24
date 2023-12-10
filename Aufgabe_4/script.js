// Starterfenster
let SchwierigeEntscheidung = prompt("Ohjemine, du bist ein unglaublicher Katzenliebhaber und kommst gerade in einem Haus um die Ecke, wo du plötzlich vor zwei Räumen stehst. In beiden Räumen befindet sich eine extrem kuschelig aussehende Katze, und nun stehst du vor der Entscheidung, welche der beiden Katzen du streicheln sollst. Beide sehen aber so aus, als würden sie es dir übel nehmen, wenn du sie nicht wählst. Wählst du nun die 'graue' oder die 'schwarze' Katze?");

let GraueKatzeEntscheidung;
let SchwarzeKatzeEntscheidung;

// Entscheidungsweg 1 mit der grauen Katze
if (SchwierigeEntscheidung === 'graue') {
    GraueKatzeEntscheidung = prompt('Die graue Katze scheint sich sehr zu freuen, dass du sie gewählt hast. Wie erwartet ist sie extrem süß und kuschelig. Du hörst jedoch ein böses Miau aus dem anderen Raum und fragst dich, was das bedeutet. Möchtest du weiterstreicheln oder den Raum verlassen?');

// Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
    if (GraueKatzeEntscheidung === 'Weiterstreicheln') {
        alert('Du ignorierst das böse Miau geschickt und streichelst weiter. Nach ein paar Sekunden kommt die schwarze Katze um die Ecke, schaut dich zuerst kurz böse an, gesellt sich dann aber zu dir und der grauen Katze dazu und genießt die Streicheleinheiten :D');
    } else if (GraueKatzeEntscheidung === 'Raum verlassen') {
        alert('Du verlässt den Raum zügig nach dem bösen Miau, nur um an der Ecke von der schwarzen Katze abgefangen zu werden. Sie sieht jedoch so aus, als würde sie dir für ein paar Streichler verzeihen, dass du sie nicht direkt gewählt hast. Also streichelst du sie, und alle sind zufrieden :)');
    } else {
        alert('Falsche Eingabe, du wirst gekratzt :(');
    }

// Entscheidungsweg 2 mit der schwarzen Katze
} else if (SchwierigeEntscheidung === 'schwarze') {
    SchwarzeKatzeEntscheidung = prompt('Du wählst die schwarze Katze und während du zu ihr läufst, um sie mit deinen Streicheleinheiten zu verwöhnen, hörst du noch ein abfälliges Miau aus dem anderen Raum. Du überlegst, ob es die richtige Entscheidung war, jedoch ist die schwarze Katze schon sehr flauschig und niedlich. Möchtest du weiterkuscheln oder deine Entscheidung überdenken?');

// Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
    if (SchwarzeKatzeEntscheidung === 'Weiterkuscheln') {
        alert('Du kuschelst tiefenentspannt weiter und mittendrin kommt die graue Katze aus dem anderen Raum, beobachtet dich kurz und entscheidet sich dann mitzukuscheln. Alle sind zufrieden am schnurren :)');
    } else if (SchwarzeKatzeEntscheidung === 'überdenken') {
        alert('Du überdenkst deine Entscheidung, und gerade als du den Raum wechseln wolltest, fängt dich die graue Katze an der Ecke ab und Miaut dich nochmals mit einer Attitüde an, lässt sich dann aber sehr motiviert von dir streicheln. So sind am Ende alle glücklich :)');
    } else {
        alert('Falsche Eingabe, du wirst gekratzt :(');
    }
} else {
    alert('Falsche Eingabe, du wirst gekratzt :(');
}

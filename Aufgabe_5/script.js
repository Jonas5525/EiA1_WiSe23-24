document.addEventListener("DOMContentLoaded", function () {
    // DOM-Elemente abrufen
    const inputField = document.getElementById("input");
    const outputField = document.getElementById("output");
  
    // Funktion zur Anzeige des Textes im Ausgabefeld
    function displayText(text) {
      outputField.textContent = text;
    }
  
    // Starttext anzeigen
    displayText("Ohjemine, du bist ein unglaublicher Katzenliebhaber und kommst gerade in einem Haus um die Ecke, wo du plötzlich vor zwei Räumen stehst. In beiden Räumen befindet sich eine extrem kuschelig aussehende Katze, und nun stehst du vor der Entscheidung, welche der beiden Katzen du streicheln sollst. Beide sehen aber so aus, als würden sie es dir übel nehmen, wenn du sie nicht wählst. Wählst du nun die *graue* oder die *schwarze* Katze?");
  
    // Funktion zur Verarbeitung der Eingabe und Aktualisierung der Ausgabe
    function handleDecision() {
      let SchwierigeEntscheidung = inputField.value.toLowerCase();
      let GraueKatzeEntscheidung;
      let SchwarzeKatzeEntscheidung;
  
      // Entscheidungsweg 1 mit der grauen Katze
      if (SchwierigeEntscheidung === 'graue') {
        displayText('Die graue Katze scheint sich sehr zu freuen, dass du sie gewählt hast. Wie erwartet ist sie extrem süß und kuschelig. Du hörst jedoch ein böses Miau aus dem anderen Raum und fragst dich, was das bedeutet. Möchtest du *weiterstreicheln* oder den *Raum verlassen*?');
  
        // Zusätzlichen Text im Ausgabefeld anzeigen
        inputField.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            GraueKatzeEntscheidung = inputField.value.toLowerCase();
  
            // Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
            if (GraueKatzeEntscheidung === 'weiterstreicheln') {
              displayText('Du ignorierst das böse Miau geschickt und streichelst weiter. Nach ein paar Sekunden kommt die schwarze Katze um die Ecke, schaut dich zuerst kurz böse an, gesellt sich dann aber zu dir und der grauen Katze dazu und genießt die Streicheleinheiten :D');
            } else if (GraueKatzeEntscheidung === 'raum verlassen') {
              displayText('Du verlässt den Raum zügig nach dem bösen Miau, nur um an der Ecke von der schwarzen Katze abgefangen zu werden. Sie sieht jedoch so aus, als würde sie dir für ein paar Streichler verzeihen, dass du sie nicht direkt gewählt hast. Also streichelst du sie, und alle sind zufrieden :)');
            } else {
              displayText('Falsche Eingabe, du wirst gekratzt :(');
            }
  
            // Eingabefeld leeren
            inputField.value = '';
          }
        });
  
      // Entscheidungsweg 2 mit der schwarzen Katze
      } else if (SchwierigeEntscheidung === 'schwarze') {
        displayText("Du wählst die schwarze Katze und während du zu ihr läufst, um sie mit deinen Streicheleinheiten zu verwöhnen, hörst du noch ein abfälliges Miau aus dem anderen Raum. Du überlegst, ob es die richtige Entscheidung war, jedoch ist die schwarze Katze schon sehr flauschig und niedlich. Möchtest du *weiterkuscheln* oder deine *Entscheidung überdenken*?");
        
        // Zusätzlichen Text im Ausgabefeld anzeigen
        inputField.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            SchwarzeKatzeEntscheidung = inputField.value.toLowerCase();
            
            // Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
            if (SchwarzeKatzeEntscheidung === 'weiterkuscheln') {
              displayText('Du kuschelst tiefenentspannt weiter und mittendrin kommt die graue Katze aus dem anderen Raum, beobachtet dich kurz und entscheidet sich dann mitzukuscheln. Alle sind zufrieden am schnurren :)');
            } else if (SchwarzeKatzeEntscheidung === 'überdenken') {
              displayText('Du überdenkst deine Entscheidung, und gerade als du den Raum wechseln wolltest, fängt dich die graue Katze an der Ecke ab und Miaut dich nochmals mit einer Attitüde an, lässt sich dann aber sehr motiviert von dir streicheln. So sind am Ende alle glücklich :)');
            } else {
              displayText('Falsche Eingabe, du wirst gekratzt :(');
            }
  
            // Eingabefeld leeren
            inputField.value = '';
          }
        });
      } else {
        displayText('Falsche Eingabe, du wirst gekratzt :(');
      }
    }
  
    // Event-Listener für die Enter-Taste hinzufügen
    inputField.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        handleDecision();
      }
    });
  });
  
import React, { useState } from "react";
import "./styles.css";

export default function DragAndDrop() {
  const [dropZoneId, setDropZoneId] = useState("");
  const [draggedElement, setDraggedElement] = useState<HTMLElement | null>(null);

  // const onTouchMove = (e: TouchEvent<HTMLButtonElement>) => {
  //   console.log("dragged element in move, element id: ", e.currentTarget.id);
  //   if (e && e.changedTouches && e.changedTouches.length > 0) {
  //     const currentDraggedOverEl = document.elementFromPoint(
  //       e.changedTouches[0].clientX,
  //       e.changedTouches[0].clientY
  //     );
  //     if (currentDraggedOverEl?.id) {
  //       setDropZoneId(currentDraggedOverEl?.id);
  //       setTouchCoordinates([e.targetTouches[0].pageX, e.targetTouches[0].pageY]);
  //     }
  //     console.log(
  //       "currentDraggedOverEl id: ",
  //       currentDraggedOverEl?.parentElement?.id,
  //       currentDraggedOverEl?.id
  //     );
  //   }
  //   console.log("touchCoordinates: ", touchCoordinates);
  // };
  // const onTouchStart = (e: any) => {
  //   setDraggedElId(e.currentTarget.id);
  //   setElementInitPos({
  //     offsetX: e.targetTouches[0].pageX,
  //     offsetY: e.targetTouches[0].pageY,
  //   });
  // };

  // interact(".drop-container.el1").resizable({
  //   // resize from all edges and corners
  //   edges: { left: true, right: true, bottom: true, top: true },

  //   listeners: {
  //     move(event) {
  //       var target = event.target;
  //       var x = parseFloat(target.getAttribute("data-x")) || 0;
  //       var y = parseFloat(target.getAttribute("data-y")) || 0;

  //       // update the element's style
  //       target.style.width = event.rect.width + "px";
  //       target.style.height = event.rect.height + "px";

  //       // translate when resizing from top or left edges
  //       x += event.deltaRect.left;
  //       y += event.deltaRect.top;

  //       target.style.transform = "translate(" + x + "px," + y + "px)";

  //       target.setAttribute("data-x", x);
  //       target.setAttribute("data-y", y);
  //     },
  //   },
  //   modifiers: [
  //     // keep the edges inside the parent
  //     interact.modifiers.restrictEdges({
  //       outer: "parent",
  //     }),

  //     // minimum size
  //     interact.modifiers.restrictSize({
  //       min: { width: 300, height: 300 },
  //     }),
  //   ],

  //   inertia: true,
  // });

  const onElementDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("onDrop element id: ", e.currentTarget.id);
    const nodeCopy: any = draggedElement?.cloneNode(true);

    nodeCopy?.style.setProperty("background", "#fff");
    nodeCopy?.setAttribute("id", (Math.random() + 1).toString(36).substring(7));
    nodeCopy?.removeAttribute("draggable");

    const buttonsContainer = e.currentTarget.getElementsByClassName("buttons_container")[0];
    if (nodeCopy) buttonsContainer?.appendChild(nodeCopy);
    setDropZoneId("");
  };

  return (
    <div className="row justify-content-center align-items-center mt-5 drag_drop_page">
      <div className="col-md-3 col-sm-12 relative">
        <p>Area for dragging items</p>
        <button
          draggable
          id="drag_button"
          className="special-button"
          onDragEnter={(e) => {
            //trigger value once
            console.log("onDragEnter (dragged-element) id: ", e.currentTarget.id);
            const copiedElem = e.currentTarget;
            setDraggedElement(copiedElem);
          }}
          onDragEnd={(e) => {
            //trigger value once
            console.log("onDragEnd (dragged-element) id: ", e.currentTarget.id);
            setDraggedElement(null);
          }}
          onDragCapture={(e) => {
            // keep capture values
            // console.log(e.clientX, e.clientY);
          }}
        >
          comments
        </button>
      </div>

      <div className="col-md-6 col-sm-12">
        <div
          className={`drop-container el1 ${dropZoneId === "0" ? "activezone" : ""}`}
          id="0"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("onDragOver element id: ", e.currentTarget.id);
            setDropZoneId(e.currentTarget.id);
          }}
          onDragLeave={(e) => {
            e.stopPropagation();
            console.log("onDragOverLeave element id: ", e.currentTarget.id);
            setDropZoneId("");
          }}
          onDrop={(e) => {
            e.stopPropagation();
            onElementDrop(e);
          }}
        >
          <p>First Area for dropping</p>
          <div className="buttons_container"></div>
          <div
            className={`drop-container el2 ${dropZoneId === "1" ? "activezone" : ""}`}
            id="1"
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("onDragOver element id: ", e.currentTarget.id);
              setDropZoneId(e.currentTarget.id);
            }}
            onDragLeave={(e) => {
              e.stopPropagation();
              console.log("onDragOverLeave element id: ", e.currentTarget.id);
              setDropZoneId("");
            }}
            onDrop={(e) => {
              e.stopPropagation();
              onElementDrop(e);
            }}
          >
            <p>Second Area for dropping</p>
            <div className="buttons_container"></div>
            <div
              className={`drop-container el3 ${dropZoneId === "2" ? "activezone" : ""}`}
              id="2"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("onDragOver element id: ", e.currentTarget.id);
                setDropZoneId(e.currentTarget.id);
              }}
              onDragLeave={(e) => {
                e.stopPropagation();
                console.log("onDragOverLeave element id: ", e.currentTarget.id);
                setDropZoneId("");
              }}
              onDrop={(e) => {
                e.stopPropagation();
                onElementDrop(e);
              }}
            >
              <p>Third Area for dropping</p>
              <div className="buttons_container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
